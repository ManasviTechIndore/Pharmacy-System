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
} from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import BreadcrumbContainer from "../../../common-components/BreadcrumbContainer/BreadcrumbContainer";
import TransportDetails from "../../../common-components/Modals/PurchaseModal/TranspotDetails";
import { useReactToPrint } from "react-to-print";
import { format, addDays } from "date-fns";

const initialRow = {
  sno: "",
  itemCode: "",
  productName: "",
  qty: "",
  freeQty: "",
  mrp: "",
  unitCost: "",
  discount1: "",
  discount2: "",
  taxableValue: "",
  cgst: "",
  sgst: "",
  igst: "",
  totalValue: "",
};

const productOptions = [
  { value: "product1", label: "Product 1" },
  { value: "product2", label: "Product 2" },
  { value: "product3", label: "Product 3" },
];

function ProductTable({ rows, onAddRow, onRemoveRow }) {
  const calculateTotal = (key) => {
    return rows
      .reduce((sum, row) => sum + parseFloat(row[key] || 0), 0)
      .toFixed(2);
  };

  return (
    <TableContainer sx={{ mb: 2 }} maxWidth="xl">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ border: "1px solid grey", width: 100, fontWeight: 700, fontSize: '15px' }}>
              S.no
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", width: 100, fontWeight: 700, fontSize: '15px' }}>
              Item Code
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", width: 100, fontWeight: 700, fontSize: '15px' }}>
              Product Name
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", width: 100, fontWeight: 700, fontSize: '15px' }}>
              Qty
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", width: 100, fontWeight: 700, fontSize: '15px' }}>
              Free Qty
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", width: 100, fontWeight: 700, fontSize: '15px' }}>
              MRP
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", width: 100, fontWeight: 700, fontSize: '15px' }}>
              Unit Cost
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", width: 100, fontWeight: 700, fontSize: '15px' }}>
              Discount1
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", width: 100, fontWeight: 700, fontSize: '15px' }}>
              Discount2
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", width: 100, fontWeight: 700, fontSize: '15px' }}>
              Taxable Value
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", width: 100, fontWeight: 700, fontSize: '15px' }}>
              CGST
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", width: 100, fontWeight: 700, fontSize: '15px' }}>
              SGST
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", width: 100, fontWeight: 700, fontSize: '15px' }}>
              IGST
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", width: 100, fontWeight: 700, fontSize: '15px' }}>
              Total Value
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell
                sx={{ border: "1px solid grey", width: 100, height: 25 }}
              >
                <TextField value={row.sno} fullWidth size="small" />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 100, height: 25 }}
              >
                <TextField value={row.itemCode} fullWidth size="small" />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 100, height: 25 }}
              >
                <Select
                  value={row.productName}
                  onChange={(e) => (row.productName = e.target.value)}
                  fullWidth
                  size="small"
                >
                  {productOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 100, height: 25 }}
              >
                <TextField value={row.qty} fullWidth size="small" />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 100, height: 25 }}
              >
                <TextField value={row.freeQty} fullWidth size="small" />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 100, height: 25 }}
              >
                <TextField value={row.mrp} fullWidth size="small" />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 100, height: 25 }}
              >
                <TextField value={row.unitCost} fullWidth size="small" />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 100, height: 25 }}
              >
                <TextField value={row.discount1} fullWidth size="small" />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 100, height: 25 }}
              >
                <TextField value={row.discount2} fullWidth size="small" />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 100, height: 25 }}
              >
                <TextField value={row.taxableValue} fullWidth size="small" />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 100, height: 25 }}
              >
                <TextField value={row.cgst} fullWidth size="small" />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 100, height: 25 }}
              >
                <TextField value={row.sgst} fullWidth size="small" />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 100, height: 25 }}
              >
                <TextField value={row.igst} fullWidth size="small" />
              </TableCell>
              <TableCell
                sx={{ border: "1px solid grey", width: 100, height: 25 }}
              >
                <TextField value={row.totalValue} fullWidth size="small" />
              </TableCell>
              <TableCell sx={{ border: "1px solid white" }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <IconButton onClick={() => onRemoveRow(index)} color="error">
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
              sx={{ border: "1px solid grey", fontWeight: 700, fontSize: '15px' }}
              colSpan={1}
              align="right"
            >
              Total
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", textAlign: 'center' }}>
              -
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", textAlign: 'center' }}>
              -
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", textAlign: 'center' }}>
              {calculateTotal("qty")}
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", textAlign: 'center' }}>
              -
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", textAlign: 'center' }}>
              -
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", textAlign: 'center' }}>
              -
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", textAlign: 'center' }}>
              -
            </TableCell>
            <TableCell sx={{ border: "1px solid grey", textAlign: 'center' }}>
              -
            </TableCell>
            <TableCell sx={{ border: "1px solid grey" }}>
              {calculateTotal("taxableValue")}
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

function PurchaseReturn() {
  const breadcrumbs = ["Purchase", "Purchase Return"];
  const [tables, setTables] = useState([
    {
      id: Date.now(),
      rows: [initialRow],
    },
  ]);
  const [otherCharges, setOtherCharges] = useState([]);
  const [reverseCharge, setReverseCharge] = useState("No");
  const [date, setDate] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");
  const [dueDate, setDueDate] = useState("");

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
  const handleAddOtherCharge = () => {
    setOtherCharges([...otherCharges, ""]);
  };

  const handleOtherChargeChange = (index, value) => {
    const updatedCharges = [...otherCharges];
    updatedCharges[index] = value;
    setOtherCharges(updatedCharges);
  };

  const resumeRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <Container maxWidth="xl" ref={resumeRef}>
      <Paper sx={{ p: 2, mb: 2 }}>
        {/* Purchase Order */}
        <Box sx={{ p: 2, mb: 2 }}>
          <Typography variant="h4" gutterBottom>
            Purchase
          </Typography>
          <BreadcrumbContainer breadcrumbs={breadcrumbs} />
          <Grid container spacing={2}>
          <Grid item xs={3}>
              <TextField select label="Supplier Name" fullWidth>
                <MenuItem value="SupplierName1">SupplierName1</MenuItem>
                <MenuItem value="SupplierName2">SupplierName2</MenuItem>
              </TextField>
            </Grid>
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
              <TextField label="Debit Note No." fullWidth />
            </Grid>            
            <Grid item xs={3}>
              <TextField label="Place of Supply" fullWidth />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Payment Terms"
                fullWidth
                value={paymentTerms}
                onChange={(e) => setPaymentTerms(e.target.value)}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Due Date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
                value={dueDate}
                InputProps={{ readOnly: true }}
              />
            </Grid>            
          </Grid>
          {/* Billing Address */}
          <Grid container spacing={2} sx={{mt:1}}>
          <Grid item md={3} xs={3}>
              <TextField label="Billing Address" fullWidth />
            </Grid>
            <Grid item md={3} xs={3}>
              <TextField label="Select purchase" 
              select
              fullWidth >
                <MenuItem>INV452325</MenuItem>
                <MenuItem>INV452325</MenuItem>
                <MenuItem>INV452325</MenuItem>
                <MenuItem>INV452325</MenuItem>
              </TextField>
            </Grid>
            <Grid item md={3} xs={3}>
              <TextField label="Reason for Return" fullWidth />
            </Grid>
          </Grid>
        </Box>
        <Divider sx={{ my: 2 }} />
    
        {/* Product Details */}
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" gutterBottom>
            Product Tables
          </Typography>
          {tables.map((table) => (
            <ProductTable
              key={table.id}
              rows={table.rows}
              onAddRow={() => handleAddRow(table.id)}
              onRemoveRow={(rowIndex) => handleRemoveRow(table.id, rowIndex)}
            />
          ))}
        </Box>

      </Paper>
    </Container>
  );
}

export default PurchaseReturn;