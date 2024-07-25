import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from "./db"
import { ObjectId } from 'mongodb';


export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const { collection } = await connectToDatabase();
        const result = await collection.insertMany(Array.isArray(data) ? data : [data]);

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error('Error posting article:', error);
        return NextResponse.json({ error: 'Failed to post article' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const { collection } = await connectToDatabase();
        const articles = await collection.find().toArray();

        return NextResponse.json(articles, { status: 200 });
    } catch (error) {
        console.error('Error fetching articles:', error);
        return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
    }
}

 function isValidObjectId(id: string) {
    return ObjectId.isValid(id) && String(new ObjectId(id)) === id;
}

// DELETE method to delete an article by ID
export async function DELETE(req:NextRequest) {
    try {
        const { id } = await req.json();

        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        const sanitizedId = String(id).replace(/^"|"$/g, '');

        if (!ObjectId.isValid(sanitizedId)) {
            return NextResponse.json({ error: 'ID must be a valid ObjectId' }, { status: 400 });
        }
        const { collection } = await connectToDatabase();
        const result = await collection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return NextResponse.json({ error: 'Article not found' }, { status: 404 });
        }

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error('Error deleting article:', error);
        return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 });
    }
}