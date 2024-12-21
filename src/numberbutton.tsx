import { Button } from "@mui/material";


interface numberbutton {
  num: string;
  onClick: (num: string) => void;
  xs?: number; 
}



const Numberbutton: React.FC<numberbutton> = ({ num, onClick }) => {
  return (
    
      <Button
        variant="contained"
        sx={{ }} 
        onClick={() => onClick(num)}
      >
        {num}
      </Button>
   
  );
};

export default Numberbutton;
