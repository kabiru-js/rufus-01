export const scrollbarStyles = {
  '*::-webkit-scrollbar': {
    width: '8px',
    height: '8px',
  },
  '*::-webkit-scrollbar-track': {
    background: 'transparent',
  },
  '*::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(156, 163, 175, 0.4)',
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: 'rgba(156, 163, 175, 0.7)',
    },
  },
};
