import pool from '../config/mysql.js';
import type { ResultSetHeader, RowDataPacket } from "mysql2";

export interface Comment extends RowDataPacket {
    id: number;
    recipeId: string;
    text: string;
}


export const getCommentById = async(id:string): Promise<Comment | null> => {
    const [rows] = await pool.execute<Comment[]>("SELECT * FROM comments WHERE id = ?" , [id]);
    return rows[0] || null;
}
