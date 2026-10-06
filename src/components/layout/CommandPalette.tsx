import React, { useState } from 'react';
import { Dialog, DialogContent, TextField, InputAdornment, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useKeyNavigation } from '../../hooks/useKeyNavigation';

interface CommandItem {
  id: string;
  title: string;
  category: string;
  onSelect: () => void;
}

export const CommandPalette: React.FC<{ items?: CommandItem[] }> = ({ items = [] }) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');

  useKeyNavigation('k', () => setOpen((prev) => !prev), true);

  const filtered = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth PaperProps={{ sx: { borderRadius: 3, p: 1 } }}>
      <DialogContent sx={{ p: 2 }}>
        <TextField
          autoFocus
          fullWidth
          size="small"
          placeholder="Type a command or search... (Esc to close)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <List sx={{ mt: 1, maxHeight: 300, overflowY: 'auto' }}>
          {filtered.length === 0 ? (
            <Typography variant="body2" color="text.secondary" sx={{ p: 2, textAlign: 'center' }}>
              No commands found.
            </Typography>
          ) : (
            filtered.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  onClick={() => {
                    item.onSelect();
                    setOpen(false);
                  }}
                  sx={{ borderRadius: 2 }}
                >
                  <ListItemText primary={item.title} secondary={item.category} />
                </ListItemButton>
              </ListItem>
            ))
          )}
        </List>
      </DialogContent>
    </Dialog>
  );
};
