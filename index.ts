// 1. Тип Course
type Course = {
  title: string;
  price: number;
  level: "beginner" | "intermediate" | "advanced";
  tags?: string[];
};

// 2. Enum UserRole
enum UserRole {
  Student,
  Instructor,
  Admin,
}

// 3. Тип User
type User = {
  id: number;
  name: string;
  role: UserRole;
  contact?: {
    email?: string;
    phone?: string;
  };
};

// 4. Функція запису на курс
function enroll(user: User, course: Course): void {
  console.log(
    `${user.name} записаний(а) на курс "${course.title}" рівня ${course.level}`
  );
}

// 5. Функція для розрахунку ціни зі знижкою
function getDiscountedPrice(course: Course, discount: number | null): number {
  if (discount !== null) {
    return course.price * (1 - discount / 100);
  }
  return course.price;
}

// 6. Тип Instructor
type Instructor = User & {
  courses: Course[];
};

// 7. Масив студентів та інструкторів
const students: User[] = [
  {
    id: 1,
    name: "Олександр",
    role: UserRole.Student,
    contact: {
      email: "olex@example.com",
    },
  },
  {
    id: 2,
    name: "Марія",
    role: UserRole.Student,
  },
];

const instructors: Instructor[] = [
  {
    id: 3,
    name: "Інна",
    role: UserRole.Instructor,
    contact: {
      phone: "123-456-7890",
    },
    courses: [],
  },
];

// 8. Масив log: історія записів користувачів на курси
const log: [User, Course][] = [];

// Приклад використання
const course: Course = {
  title: "TypeScript для початківців",
  price: 300,
  level: "beginner",
};

const user: User = students[0];

enroll(user, course); // виведе повідомлення

const discountedPrice = getDiscountedPrice(course, 10); // 270
console.log(`Ціна зі знижкою: ${discountedPrice} грн`);

log.push([user, course]); // запис у лог

// Optional chaining приклад:
console.log(user.contact?.email); // "olex@example.com"
console.log(user.contact?.phone); // undefined
