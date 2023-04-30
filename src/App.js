import React, { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button, Card, Form, ListGroup } from 'react-bootstrap';

const girisVerisi = [
  { id: uuidv4(), text: 'Yemek yap', completed: false },
  { id: uuidv4(), text: 'Spor yap', completed: true },
  { id: uuidv4(), text: 'Alışveriş yap', completed: false },
];

function todoAksiyonlari(state, aksiyon) {
  switch (aksiyon.type) {
    case 'ekle':
      return [
        ...state,
        {
          id: uuidv4(),
          text: aksiyon.text,
          completed: false,
        },
      ];
    case 'degistir':
      return state.map((task) =>
        task.id === aksiyon.id ? { ...task, completed: !task.completed } : task
      );
    case 'sil':
      return state.filter((task) => task.id !== aksiyon.id);
    default:
      throw new Error(`Unhandled action type: ${aksiyon.type}`);
  }
}

function App() {
  const [gorevler, araciFonksiyon] = useReducer(todoAksiyonlari, girisVerisi);
  const [newTask, setNewTask] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    araciFonksiyon({ type: 'ekle', text: newTask });
    setNewTask('');
  }

  return (
    <div className="container mt-4">
      <Card>

        <Card.Header className="bg-primary text-white">To-Do List</Card.Header>

        <Card.Body>
          <ListGroup>
            {gorevler.map((task) => (
              <ListGroup.Item
                key={task.id}
                className={task.completed ? 'text-decoration-line-through' : ''}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <span>{task.text}</span>
                  <div>
                    <Button
                      variant="success"
                      className="me-2"
                      onClick={() => araciFonksiyon({ type: 'degistir', id: task.id })}
                    >
                      {task.completed ? 'Tamamlanmadı' : 'Tamamlandı'}
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => araciFonksiyon({ type: 'sil', id: task.id })}
                    >
                      Sil
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>

        <Card.Footer>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Add New Task:</Form.Label>
              <Form.Control
                type="text"
                value={newTask}
                onChange={(event) => setNewTask(event.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Add
            </Button>
          </Form>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default App;