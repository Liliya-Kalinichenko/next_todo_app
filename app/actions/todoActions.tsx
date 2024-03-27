'use server';

import { revalidatePath } from "next/cache";
import  prisma  from "@/utils/prisma";
import { Todo } from "../types/Todo";

export async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "asc",
    }
  })

  revalidatePath("/");
  
  return data;  
};

export async function createTodo(formData: FormData) {
  const input = formData.get("input") as string;

  if (!input.trim()) {
    return;
  }
    await prisma.todo.create({
      data: {
        title: input,
      }
    })

  revalidatePath("/");
};


export async function changeStatus(todo: Todo) {
  await prisma.todo.update({
    where: {
      id: todo.id
    },
    data: {
      isCompleted: !todo.isCompleted
    }
  })

  revalidatePath("/");
};

export async function editTodo(newTitle: string | null, todoId: string) {
  if (!newTitle || !newTitle.trim()) {
    return;
  }
    await prisma.todo.update({
      where: {
        id: todoId
      },
      data: {
        title: newTitle
      }
    })    

  revalidatePath("/");
};

export async function toggleAll() {
  const todos = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "asc"
    }
  });

  const isAllCompleted = todos.every(todo => todo.isCompleted)

    if (isAllCompleted) {
      await prisma.todo.updateMany({
        where: {
          isCompleted: true,
        },
        data: {
          isCompleted: false,
        }
      })
    } else {
      await prisma.todo.updateMany({
        where: {
          isCompleted: false
        },
        data: {
          isCompleted: true,
        }
      })
    }

  revalidatePath("/");
};

export async function deleteTodo(todoId: string) {
  await prisma.todo.delete({
    where: {
      id: todoId
    },
  })

  revalidatePath("/"); 
};

export async function clearCompleted() {
  await prisma.todo.deleteMany({
    where: {
      isCompleted: true
    },
  })

  revalidatePath("/");
};