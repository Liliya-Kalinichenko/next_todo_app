import { Typography } from "@mui/material";
import AddTodo from "@/app/components/AddTodo";
import TodoList from "@/app/components/TodoList";
import React from "react";
import Main from "./components/MainContainer";
import TodoContainer from "./components/TodoContainer";
import { getData } from "./actions/todoActions";



 const Home = async () => {

const todos = await getData();

  return (
    <Main>
      <Typography mt={5} variant="h1" className="shine">
        Todo App
      </Typography>

      <TodoContainer>
        <AddTodo />

        <TodoList todos={todos} />
      </TodoContainer>
    </Main>
  );
}

export default Home;