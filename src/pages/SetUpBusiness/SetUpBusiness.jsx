    import React, {useState, useEffect} from "react";
    import {
        Container,
        Grid,
        TextField,
        Typography,
        Button,
        Card,
        CardContent,
        FormControl,
        InputLabel,
        Select,
        MenuItem,
        Switch,
        FormControlLabel,
    } from "@mui/material";
    import {motion} from "framer-motion";
    import {
        Business,
        LocationOn,
        Public,
        Mail,
        Phone,
        Language,
        AccountBalance,
        AccountBox,
        Money,
        CreditCard,
        FileUpload,
    } from "@mui/icons-material";
    import {CountryDropdown, RegionDropdown} from "react-country-region-selector";
    import Flag from "react-world-flags";

    function SetUpBusiness() {
        const [ selectedCountry, setSelectedCountry ] = useState("");
        const [ selectedState, setSelectedState ] = useState("");
        const [ selectedStatutoryState, setSelectedStatutoryState ] = useState("");
        const [ formData, setFormData ] = useState({
            businessLogo: "",
            businessName: "",
            address: "",
            pinCode: "",
            email: "",
            website: "",
            phoneNumber: "",
            enableGst: false,
            gstin: "",
            taxRate: "",
            registrationType: "",
            drugLicenceNo: "",
            otherTax: false,
            otherTaxName: "",
            otherTaxNumber: "",
            bankName: "",
            bankAddress: "",
            ifscCode: "",
            accountHolderName: "",
            accountNumber: "",
        });

        const handleCountryChange = (val) => {
            setSelectedCountry(val);
            setSelectedState(""); // Reset state when country changes
            setSelectedStatutoryState(""); // Reset statutory state when country changes
        };

        const handleStateChange = (val) => {
            setSelectedState(val);
            setSelectedStatutoryState(val); // Set selected state for statutory details
        };

        const handleInputChange = (event) => {
            const {name, value} = event.target;
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        };

        const handleGstChange = (event) => {
            setFormData((prevState) => ({
                ...prevState,
                enableGst: event.target.checked,
            }));
        };

        const handleRegistrationTypeChange = (event) => {
            setFormData((prevState) => ({
                ...prevState,
                registrationType: event.target.value,
            }));
        };

        return (
            <Container maxWidth="lg" sx={{mt: 5, mb: 5}}>
                <motion.div initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Set Up Business
                    </Typography>
                </motion.div>
                <Card component={motion.div} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Business Information
                        </Typography>

                        {/* Business Information */}
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    type="file"
                                    label="Business Logo"
                                    fullWidth
                                    name="businessLogo"
                                    InputProps={{startAdornment: <FileUpload />}}
                                    value={formData.businessLogo}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            {/* Business Name */}
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    label="Business Name"
                                    fullWidth
                                    name="businessName"
                                    InputProps={{startAdornment: <Business />}}
                                    value={formData.businessName}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            {/* Address */}
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    label="Address"
                                    fullWidth
                                    name="address"
                                    InputProps={{startAdornment: <LocationOn />}}
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            {/* Pin Code */}
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    label="Pin Code"
                                    fullWidth
                                    name="pinCode"
                                    InputProps={{startAdornment: <LocationOn />}}
                                    value={formData.pinCode}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            {/* Country */}
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControl fullWidth>
                                    
                                    <CountryDropdown
                                        value={selectedCountry}
                                        onChange={handleCountryChange}
                                        label="Country"
                                        classes="country-dropdown"
                                        showFlags
                                        flagComponent={({country}) => (
                                            <Flag code={country} style={{width: "24px", marginRight: "8px"}} />
                                        )}
                                        style={{padding: "16.5px 14px", marginTop: "8px"}} // Adjust padding to align with other fields
                                    />
                                </FormControl>
                            </Grid>
                            {/* State */}
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControl fullWidth>
                                    <RegionDropdown
                                        country={selectedCountry}
                                        value={selectedState}
                                        onChange={handleStateChange}
                                        disabled={!selectedCountry}
                                        label="State"
                                        style={{padding: "16.5px 14px", marginTop: "8px"}} // Adjust padding to align with other fields
                                    />
                                </FormControl>
                            </Grid>
                            {/* Email */}
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    label="Email Id"
                                    fullWidth
                                    name="email"
                                    InputProps={{startAdornment: <Mail />}}
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            {/* Website */}
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    label="Website"
                                    fullWidth
                                    name="website"
                                    InputProps={{startAdornment: <Language />}}
                                    value={formData.website}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            {/* Phone Number */}
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    label="Phone number"
                                    fullWidth
                                    name="phoneNumber"
                                    InputProps={{startAdornment: <Phone />}}
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>

                        {/* Statutory Details */}
                        <Typography variant="h6" gutterBottom sx={{mt: 3}}>
                            Statutory Details
                        </Typography>
                        <Grid container spacing={3}>
                            {/* Enable GST */}
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControlLabel
                                    control={<Switch checked={formData.enableGst} onChange={handleGstChange} />}
                                    label="Enable GST"
                                />
                            </Grid>
                            {/* State */}
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    label="State"
                                    fullWidth
                                    name="selectedStatutoryState"
                                    InputProps={{startAdornment: <Public />}}
                                    value={selectedStatutoryState}
                                    onChange={handleInputChange}
                                    required={formData.enableGst}
                                    disabled={!formData.enableGst}
                                />
                            </Grid>
                            {/* Registration Type */}
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControl fullWidth>
                                    <InputLabel>Registration Type</InputLabel>
                                    <Select
                                        value={formData.registrationType}
                                        onChange={handleRegistrationTypeChange}
                                        label="Registration Type"
                                        name="registrationType"
                                        disabled={!formData.enableGst}
                                    >
                                        <MenuItem value="">Select Registration Type</MenuItem>
                                        <MenuItem value="Regular">Regular</MenuItem>
                                        <MenuItem value="Composition">Composition</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            {/* GSTIN */}
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    label="GSTIN"
                                    fullWidth
                                    name="gstin"
                                    InputProps={{startAdornment: <Business />}}
                                    value={formData.gstin}
                                    onChange={handleInputChange}
                                    required={formData.enableGst}
                                    disabled={!formData.enableGst}
                                />
                            </Grid>
                            {/* Tax Rate */}
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    label="Tax Rate"
                                    fullWidth
                                    name="taxRate"
                                    InputProps={{startAdornment: <Money />}}
                                    value={formData.taxRate}
                                    onChange={handleInputChange}
                                    disabled={formData.registrationType !== "Composition" || !formData.enableGst}
                                />
                            </Grid>
                            {/* Drug Licence */}
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    label="Drug Licence No"
                                    fullWidth
                                    name="drugLicenceNo"
                                    InputProps={{startAdornment: <CreditCard />}}
                                    value={formData.drugLicenceNo}
                                    onChange={handleInputChange}
                                    disabled={!formData.enableGst}
                                />
                            </Grid>
                            {/* Other Tax */}
                            <Grid item xs={12} sm={6} md={4}>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            checked={formData.otherTax}
                                            onChange={(event) =>
                                                setFormData((prevState) => ({
                                                    ...prevState,
                                                    otherTax: event.target.checked,
                                                }))
                                            }
                                        />
                                    }
                                    label="Enable Other Tax"
                                />
                            </Grid>
                            {/* Other Tax Name */}
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    label="Other Tax Name"
                                    fullWidth
                                    name="otherTaxName"
                                    InputProps={{startAdornment: <Business />}}
                                    value={formData.otherTaxName}
                                    onChange={handleInputChange}
                                    disabled={!formData.otherTax}
                                />
                            </Grid>
                            {/* Other Tax Number */}
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    label="Other Tax Number"
                                    fullWidth
                                    name="otherTaxNumber"
                                    InputProps={{startAdornment: <Business />}}
                                    value={formData.otherTaxNumber}
                                    onChange={handleInputChange}
                                    disabled={!formData.otherTax}
                                />
                            </Grid>
                        </Grid>
                        {/* Bank Details */}
                        <Typography variant="h6" gutterBottom sx={{mt: 3}}>
                            Bank Details
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    label="Bank Name"
                                    fullWidth
                                    name="bankName"
                                    InputProps={{startAdornment: <AccountBalance />}}
                                    value={formData.bankName}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            {/* Bank Address */}
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    label="Bank Address"
                                    fullWidth
                                    name="bankAddress"
                                    InputProps={{startAdornment: <LocationOn />}}
                                    value={formData.bankAddress}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            {/* IFSC Code */}
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    label="IFSC Code"
                                    fullWidth
                                    name="ifscCode"
                                    InputProps={{startAdornment: <LocationOn />}}
                                    value={formData.ifscCode}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            {/* Account Holder Name */}
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    label="Account Holder Name"
                                    fullWidth
                                    name="accountHolderName"
                                    InputProps={{startAdornment: <AccountBox />}}
                                    value={formData.accountHolderName}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            {/* Account Number */}
                            <Grid item xs={12} sm={6} md={4}>
                                <TextField
                                    label="Account Number"
                                    fullWidth
                                    name="accountNumber"
                                    InputProps={{startAdornment: <CreditCard />}}
                                    value={formData.accountNumber}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                        </Grid>
                        {/* Save Button */}
                        <Grid container spacing={3} sx={{mt: 3}}>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" fullWidth>
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        );
    }

    export default SetUpBusiness;
