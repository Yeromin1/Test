// import createHttpError from 'http-errors';

// import { updateStudent } from '../services/students.js';

// /* Решта коду файла */

// export const patchStudentController = async (req, res, next) => {
//   const { studentId } = req.params;
//   const result = await updateStudent(studentId, req.body);

//   if (!result) {
//     next(createHttpError(404, 'Student not found'));
//     return;
//   }

//   res.json({
//     status: 200,
//     message: `Successfully patched a student!`,
//     data: result.student,
//   });
// };
