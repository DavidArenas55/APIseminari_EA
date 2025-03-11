import { Request, Response } from 'express';
import {
    createSubject,
    getAllSubjects,
    getSubjectById,
    updateSubject,
    deleteSubject,
    getAlumniBySubject
} from '../subjects/subject_service.js';    


// Crear asignatura
export const createSubjectHandler = async (req: Request, res: Response) => {
    try {
        const subject = await createSubject(req.body);
        res.status(201).json(subject);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'Unknown error' });
        }
    }
};

// Obtener todas las asignaturas
export const getAllSubjectsHandler = async (_req: Request, res: Response) => {
    try {
        const subjects = await getAllSubjects();
        res.json(subjects);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
};

// Obtener una asignatura por ID
export const getSubjectByIdHandler = async (req: Request, res: Response) => {
    try {
        const subject = await getSubjectById(req.params.id);
        subject ? res.json(subject) : res.status(404).json({ message: 'Asignatura no encontrada' });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
};

// Actualizar asignatura
export const updateSubjectHandler = async (req: Request, res: Response) => {
    try {
        await updateSubject(req.params.id, req.body);
        res.json({ message: 'Asignatura actualizada' });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
};

// Eliminar asignatura
export const deleteSubjectHandler = async (req: Request, res: Response) => {
    try {
        await deleteSubject(req.params.id);
        res.json({ message: 'Asignatura eliminada' });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
};

// Obtener alumnos de una asignatura
export const getAlumniBySubjectHandler = async (req: Request, res: Response) => {
    try {
        const alumni = await getAlumniBySubject(req.params.id);
        alumni ? res.json(alumni) : res.status(404).json({ message: 'Asignatura no encontrada' });
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Unknown error' });
        }
    }
};
