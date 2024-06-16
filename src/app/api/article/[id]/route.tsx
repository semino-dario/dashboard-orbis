import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from "../../db"
import { ObjectId } from 'mongodb';
import { isValidObjectId } from '../../route';

// PUT method to update an article by ID
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }
   
        const sanitizedId = String(id).replace(/^"|"$/g, '');

    
        if (!isValidObjectId(sanitizedId)) {
            return NextResponse.json({ error: 'ID must be a valid ObjectId' }, { status: 400 });
        }

        const data = await req.json();
        const { collection } = await connectToDatabase();
        const result = await collection.updateOne({ _id: new ObjectId(sanitizedId) }, { $set: data });

        if (result.matchedCount === 0) {
            return NextResponse.json({ error: 'Article not found' }, { status: 404 });
        }

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error('Error updating article:', error);
        return NextResponse.json({ error: 'Failed to update article' }, { status: 500 });
    }
}

