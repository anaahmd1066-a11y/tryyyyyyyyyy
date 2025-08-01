import { Student } from '../types';

export const studentsData: Student[] = [
  { id: 1001, name: "أحمد محمد علي", category: "ثلاثة أجزاء", grade: 95 },
  { id: 1002, name: "فاطمة إبراهيم", category: "خمسة أجزاء", grade: 88 },
  { id: 1003, name: "عمر حسن", category: "ثمانية أجزاء", grade: 92 },
  { id: 1004, name: "نور الدين محمود", category: "عشر أجزاء", grade: 85 },
  { id: 1005, name: "ريم عبدالله", category: "خمس عشر أجزاء", grade: 90 },
  
  { id: 2001, name: "يوسف الأحمد", category: "عشرون جزء", grade: 97 },
  { id: 2002, name: "مريم سالم", category: "خمس وعشرون جزء", grade: 89 },
  { id: 2003, name: "حسام النجار", category: "ثلاثون جزء", grade: 94 },
  { id: 2004, name: "ليلى الخطيب", category: "ثلاثة أجزاء", grade: 91 },
  { id: 2005, name: "طارق عيسى", category: "خمسة أجزاء", grade: 86 },
  { id: 2006, name: "سارة أحمد", category: "ثمانية أجزاء", grade: 93 },
  { id: 2007, name: "محمد حسين", category: "عشر أجزاء", grade: 87 },
  { id: 2008, name: "زينب علي", category: "خمس عشر أجزاء", grade: 89 },
  { id: 2009, name: "خالد محمود", category: "عشرون جزء", grade: 92 },
  { id: 2010, name: "هدى سالم", category: "خمس وعشرون جزء", grade: 96 },
  { id: 2011, name: "عبدالرحمن يوسف", category: "ثلاثون جزء", grade: 98 },
  { id: 2012, name: "آية محمد", category: "ثلاثة أجزاء", grade: 84 },
  { id: 2013, name: "إبراهيم عبدالله", category: "خمسة أجزاء", grade: 88 },
  { id: 2014, name: "رقية حسن", category: "ثمانية أجزاء", grade: 90 },
  { id: 2015, name: "عثمان الأحمد", category: "عشر أجزاء", grade: 85 }
];

// Add ranks to students based on their grades
export const rankedStudents = studentsData
  .sort((a, b) => b.grade - a.grade)
  .map((student, index) => ({
    ...student,
    rank: index + 1
  }));