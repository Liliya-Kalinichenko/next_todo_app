import { editTodo } from '@/app/actions/todoActions';
import { Todo } from '@/app/types/Todo';
import { FormControl, TextField } from '@mui/material';
import React, { useRef } from 'react';

interface Props {
  todo: Todo;
  setIsEditMode: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
}

const EditTodo: React.FC<Props> = ({todo, setIsEditMode, setIsLoading}) => {
  const form = useRef<HTMLFormElement>(null);
  const formField = useRef<HTMLInputElement>(null);
  const { id, title } = todo;

  const handleSubmitNewTitle = async (formData: FormData) => {
    const newTitle = formData.get("newTitle") as string;
    setIsLoading(true);
    
    setTimeout(async() => {
      try {
        await editTodo(newTitle, id);
        form.current?.reset();
        setIsEditMode(false);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }

    }, 500)
  }

  const handleOnBlur = async () => {
    setIsLoading(true);
    
    setTimeout(async() => {
      try {
        if (formField.current) {
          await editTodo(formField.current.value, id)          
        }
      } catch (e) {
        console.error(e);
      } finally {
          setIsEditMode(false);
          setIsLoading(false);
        }
      }, 500)
  }

  return (
    <FormControl
      component="form"
      ref={form}
      autoComplete="off" 
      action={handleSubmitNewTitle}
      sx={{width: '100%'}}
    >
        <TextField
          inputRef={formField}
          variant="standard"
          name="newTitle"
          defaultValue={title}
          autoFocus={true}
          onBlur={handleOnBlur}
        />
    </FormControl>
  )
}

export default EditTodo;
