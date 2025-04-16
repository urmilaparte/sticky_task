import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  IconButton,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import NavBar from './NavBar';

// <<<<<<< Updated upstream
const Create = () => {
  const colors = ['#FFF176', '#81C784', '#64B5F6', '#BA68C8', '#FF8A65'];

  const [note, setNote] = useState('');
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [notes, setNotes] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editText, setEditText] = useState('');

  // Save new note
  const handleSave = () => {
    if (note.trim()) {
      setNotes([...notes, { text: note, color: selectedColor }]);
      setNote('');
    }
  };

  // Delete note
  const handleDelete = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  // Start editing
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditText(notes[index].text);
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditText('');
  };

  // Save edited note
  const handleSaveEdit = (index) => {
    const updatedNotes = [...notes];
    updatedNotes[index].text = editText;
    setNotes(updatedNotes);
    setEditingIndex(null);
    setEditText('');
  };

  return (
    <>
    <NavBar>
    <Box p={4}>
      <Card sx={{ p: 2, mb: 4 }}>
        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Write your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <Box display="flex" gap={2} mt={2} alignItems="center">
          {colors.map((color, index) => (
            <Box
              key={index}
              onClick={() => setSelectedColor(color)}
              sx={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                backgroundColor: color,
                border: selectedColor === color ? '2px solid black' : '2px solid transparent',
                cursor: 'pointer',
              }}
            />
          ))}
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            sx={{ ml: 'auto' }}
            onClick={handleSave}
          >
            Save Note
          </Button>
        </Box>
      </Card>

      {/* Sticky Notes Display */}
      <Box display="flex" flexWrap="wrap" gap={2}>
        {notes.map((item, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: item.color,
              width: 200,
              minHeight: 120,
              padding: 2,
              boxShadow: 3,
              position: 'relative',
            }}
          >
            <CardContent>
              {editingIndex === index ? (
                <>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                  />
                  <Box mt={1} display="flex" justifyContent="flex-end" gap={1}>
                    <IconButton color="success" onClick={() => handleSaveEdit(index)}>
                      <CheckIcon />
                    </IconButton>
                    <IconButton color="error" onClick={handleCancelEdit}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                </>
              ) : (
                <>
                  <Typography>{item.text}</Typography>
                  <Box mt={1} display="flex" justifyContent="flex-end" gap={1}>
                    <IconButton size="small" onClick={() => handleEdit(index)}>
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" onClick={() => handleDelete(index)}>
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
    </NavBar>
    </>
  );
};

export default Create;
