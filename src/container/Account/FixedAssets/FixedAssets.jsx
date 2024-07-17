import React, { useState, useRef, useEffect } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  Grid,
  Typography,
  Paper,
  Box,
  Divider,
  Container,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
} from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import BreadcrumbContainer from "../../../common-components/BreadcrumbContainer/BreadcrumbContainer";
import TransportDetails from "../../../common-components/Modals/PurchaseModal/TranspotDetails";
import { useReactToPrint } from "react-to-print";
import { format, addDays } from "date-fns";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const initialRow = {
  sno: "",
  itemCode: "",
  assetsName: "",
  qty: "",
  amount: "",
  uom:"",
  rate: "",
  taxValue: "",
  cgst: "",
  igst: "",
  sgst: "",
  totalValue: "",
};


function ProductTable({ rows, onAddRow, onRemoveRow, onRowChange }) {
  const calculateTotal = (key) => {
    return rows
      .reduce((sum, row) => sum + parseFloat(row[key] || 0), 0)
      .toFixed(2);
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    onRowChange(updatedRows);
  };

  return (
    <TableContainer sx={{ mb: 2 }} maxWidth="xl">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid grey",
                width: 150,
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              S.no
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid grey",
                width: 150,
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
             Assets Name
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid grey",
                width: 150,
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              Qty
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid grey",
                width: 150,
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              UOM
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid grey",
                width: 150,
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
               Rate
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid grey",
                width: 150,
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
             Taxable Value
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid grey",
                width: 150,
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              CGST
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid grey",
                width: 150,
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
               SGST
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid grey",
                width: 150,
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
               IGST
            </TableCell>
            <TableCell
              sx={{
                border: "1px solid grey",
                width: 150,
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
               Total Value
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell
                sx={{ border: "1px solid grey", width: 150, height: 25 }}
              >
                <TextField
                  value={row.sno}
                  fullWidth
                  size="small"
                  onChange={(e) =>
                    handleInputChange(index, "sno", e.target.value)
                  }
                  InputProps={{
                    sx: {
                      border: "none",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    },
                  }}
                />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 150, height: 25 }}
              >
                <TextField
                  value={row.assetsName}
                  fullWidth
                  size="small"
                  onChange={(e) =>
                    handleInputChange(index, "assetsName", e.target.value)
                  }
                  InputProps={{
                    sx: {
                      border: "none",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    },
                  }}
                />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 150, height: 25 }}
              >
                <TextField
                  value={row.qty}
                  fullWidth
                  size="small"
                  onChange={(e) =>
                    handleInputChange(index, "qty", e.target.value)
                  }
                  InputProps={{
                    sx: {
                      border: "none",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    },
                  }}
                />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 150, height: 25 }}
              >
                <TextField
                  value={row.uom}
                  fullWidth
                  size="small"
                  onChange={(e) =>
                    handleInputChange(index, "uom", e.target.value)
                  }
                  InputProps={{
                    sx: {
                      border: "none",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    },
                  }}
                />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 150, height: 25 }}
              >
                <TextField
                  value={row.rate}
                  fullWidth
                  size="small"
                  onChange={(e) =>
                    handleInputChange(index, "rate", e.target.value)
                  }
                  InputProps={{
                    sx: {
                      border: "none",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    },
                  }}
                />
              </TableCell>              
              <TableCell
                sx={{ border: "1px solid grey", width: 150, height: 25 }}
              >
                <TextField
                  value={row.taxValue}
                  fullWidth
                  size="small"
                  onChange={(e) =>
                    handleInputChange(index, "taxValue", e.target.value)
                  }
                  InputProps={{
                    sx: {
                      border: "none",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    },
                  }}
                />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 150, height: 25 }}
              >
                <TextField
                  value={row.cgst}
                  fullWidth
                  size="small"
                  onChange={(e) =>
                    handleInputChange(index, "cgst", e.target.value)
                  }
                  InputProps={{
                    sx: {
                      border: "none",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    },
                  }}
                />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 150, height: 25 }}
              >
                <TextField
                  value={row.sgst}
                  fullWidth
                  size="small"
                  onChange={(e) =>
                    handleInputChange(index, "sgst", e.target.value)
                  }
                  InputProps={{
                    sx: {
                      border: "none",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    },
                  }}
                />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 150, height: 25 }}
              >
                <TextField
                  value={row.igst}
                  fullWidth
                  size="small"
                  onChange={(e) =>
                    handleInputChange(index, "igst", e.target.value)
                  }
                  InputProps={{
                    sx: {
                      border: "none",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    },
                  }}
                />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 150, height: 25 }}
              >
                <TextField
                  value={row.totalValue}
                  fullWidth
                  size="small"
                  onChange={(e) =>
                    handleInputChange(index, "totalValue", e.target.value)
                  }
                  InputProps={{
                    sx: {
                      border: "none",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    },
                  }}
                />
              </TableCell>              
              <TableCell sx={{ border: "1px solid white" }}>
                <Box sx={{ display: "flex", justifyContent: "start" }}>
                  <IconButton
                    onClick={() => onRemoveRow(index)}
                    color="error"
                  >
                    <RemoveCircle />
                  </IconButton>
                  <IconButton onClick={onAddRow} color="success">
                    <AddCircle />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid grey",
                fontWeight: 700,
                fontSize: "15px",
              }}
              colSpan={1}
              align="right"
            >
              Total
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", textAlign: "center" }}>
              -
            </TableCell>
            <TableCell sx={{ border: "1px solid grey" }}>
              {calculateTotal("qty")}
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", textAlign: "center" }}>
              -
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", textAlign: "center" }}>
              -
            </TableCell>
            <TableCell sx={{ border: "1px solid grey" }}>
              {calculateTotal("taxValue")}
            </TableCell>
            <TableCell sx={{ border: "1px solid grey" }}>
              {calculateTotal("cgst")}
            </TableCell>
            <TableCell sx={{ border: "1px solid grey" }}>
              {calculateTotal("sgst")}
            </TableCell>
            <TableCell sx={{ border: "1px solid grey" }}>
              {calculateTotal("igst")}
            </TableCell>
            <TableCell sx={{ border: "1px solid grey" }}>
              {calculateTotal("totalValue")}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function FixedAssets() {
  const breadcrumbs = ["Account", "Fixed Assets"];
  const [tables, setTables] = useState([
    {
      id: Date.now(),
      rows: [initialRow],
    },
  ]);
  const [date, setDate] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [charges, setCharges] = useState([]);
  const [totalCharges, setTotalCharges] = useState(0);
  const [currentCharge, setCurrentCharge] = useState('');


  useEffect(() => {
    if (date && paymentTerms) {
      const newDueDate = addDays(new Date(date), parseInt(paymentTerms));
      setDueDate(format(newDueDate, "yyyy-MM-dd"));
    }
  }, [date, paymentTerms]);

  const handleAddRow = (tableId) => {
    setTables(
      tables.map((table) =>
        table.id === tableId
          ? { ...table, rows: [...table.rows, { ...initialRow }] }
          : table
      )
    );
  };

  const handleRemoveRow = (tableId, rowIndex) => {
    setTables(
      tables.map((table) =>
        table.id === tableId
          ? {
              ...table,
              rows: table.rows.filter((_, index) => index !== rowIndex),
            }
          : table
      )
    );
  };

  const handleRowChange = (tableId, updatedRows) => {
    setTables(
      tables.map((table) =>
        table.id === tableId ? { ...table, rows: updatedRows } : table
      )
    );
  };

  const resumeRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddCharge = () => {
    const charge = parseFloat(currentCharge);
    if (!isNaN(charge)) {
      setCharges([...charges, charge]);
      setTotalCharges(totalCharges + charge);
      setCurrentCharge('');
    }
    setOpen(false);
  };

  return (
    <Container maxWidth="xl" ref={resumeRef}>
      <Paper sx={{ p: 2, mb: 2 }}>
        {/* Purchase Order */}
        <Box sx={{ p: 2, mb: 2 }}>
          <Typography variant="h4" gutterBottom>
          Account
          </Typography>
          <BreadcrumbContainer breadcrumbs={breadcrumbs} />
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                label="Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Income No." fullWidth />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Supplier Income No." fullWidth />
            </Grid>           
            <Grid item xs={3}>
              <TextField select label="Supplier Name" fullWidth>
                <MenuItem value="Supplier1">Supplier1</MenuItem>
                <MenuItem value="Supplier2">Supplier2</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField select label="Place of Supply" fullWidth>
                <MenuItem value="Supply1">Supply1</MenuItem>
                <MenuItem value="Supply2">Supply2</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={3}>
              <TextField select label="Tax Type" fullWidth>
                <MenuItem value="GST @ 5% (CGST 2.5% +SGST 2.5%)">GST @ 5% (CGST 2.5% +SGST 2.5%)</MenuItem>
                <MenuItem value="GST @12% (CGST 6% +SGST 6%)">GST @12% (CGST 6% +SGST 6%)</MenuItem>
                <MenuItem value="GST @18% (CGST 9% +SGST 9%)">GST @18% (CGST 9% +SGST 9%)</MenuItem>
                <MenuItem value="GST@28% (CGST 14% +SGST 14%)">GST@28% (CGST 14% +SGST 14%)</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        
        </Box>

        {/* Product Details */}
        <Box sx={{ p: 2 }}>          
          {tables.map((table) => (
            <ProductTable
              key={table.id}
              rows={table.rows}
              onAddRow={() => handleAddRow(table.id)}
              onRemoveRow={(rowIndex) => handleRemoveRow(table.id, rowIndex)}
              onRowChange={(updatedRows) =>
                handleRowChange(table.id, updatedRows)
              }
            />
          ))}
        </Box>

      {/* Add Other Charges */}
      <Grid container spacing={2} sx={{ p: 2, mb: 2 }}>
          <Grid item md={4} xs={4}>
            <Button
              variant="contained"
              onClick={handleOpen}
              sx={{ mb: 2 }}
              startIcon={<AddCircle />}
              className="btn-design"
            >
              Add Other Charges
            </Button>
            <Modal open={open} onClose={handleClose} sx={{ maxWidth: "xl" }}>
              <Grid container spacing={1} sx={style} maxWidth="xl">
                <Grid item md={12} xs={12} >
                  <Typography variant="h6" sx={{fontWeight:700}}> Other Charges</Typography>
                  <TextField                    
                    fullWidth
                    sx={{ mt: 2 }}
                    label="Other Charges"
                    value={currentCharge}
                    onChange={(e) => setCurrentCharge(e.target.value)}
                  />
                  <Button className="btn-design" sx={{color:'white', mt:2}}  onClick={handleAddCharge}>Add</Button>
                </Grid>
              </Grid>
            </Modal>   
            <TextField label="Narration" fullWidth multiline rows={3} />
          </Grid>
          {/* Gross Amount */}
          <Grid item md={8} xs={8}>
            <Box
              style={{ display: "grid", justifyContent: "center", gap: "15px" }}
            >
              <TextField label="Gross Amount" fullWidth />
              <TextField label="GST Amount" fullWidth />
              <TextField label="Other Charge" fullWidth
               value={totalCharges}
               InputProps={{
                 readOnly: true,
               }} />
              <TextField label="Net Amount" fullWidth />
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 2 }} />

        {/* Button */}
        <Grid container spacing={2}>
          <Grid
            item
            md={12}
            xs={12}
            sx={{ display: "flex", justifyContent: "center", gap: "10px" }}
          >
            <Button variant="contained" className="btn-design">
              Save
            </Button>

            <Button
              variant="contained"
              className="btn-design"
              onClick={handlePrint}
            >
              Save & Print
            </Button>

          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default FixedAssets;