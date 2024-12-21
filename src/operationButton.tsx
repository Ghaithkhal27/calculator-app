import { Button} from "@mui/material";


interface operationSelector {
    operation:string
    Selector:(operation:string)=>void

}



export const OperationButton:React.FC<operationSelector>=(
    {operation,
    Selector}
) =>{
  return (
    
    
        <Button 
        variant="contained"
        
        sx={{}}
       
        onClick={()=>Selector(operation)}>
            {operation}
        </Button>
   
  )
}
