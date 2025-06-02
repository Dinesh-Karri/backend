const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Dashboard = require('./models/Dashboard');
const Appointment = require('./models/Appointment');
const Medicine = require('./models/Medicine');
const BloodBlank=require('./models/Blood bank') // ✅ Added Medicine model

const app = express();
const port = 5001;

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://dineshkarri369:12345@cluster0.8rphuor.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Root route
app.get('/', (req, res) => {
    res.send("Welcome to the API (Dashboard, Appointments, Medicines)");
});

/* ---------------------- Dashboard Routes ---------------------- */

// CREATE Dashboard
app.post("/api/dashboard", async (req, res) => {
    try {
        const dashboard = await Dashboard.create(req.body);
        res.status(200).json({ success: true, dashboard });
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

// READ all Dashboards
app.get("/api/dashboard", async (req, res) => {
    try {
        const dashboards = await Dashboard.find();
        res.status(200).json({ success: true, dashboards });
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

// READ Dashboard by ID
app.get("/api/dashboard/:id", async (req, res) => {
    try {
        const dashboard = await Dashboard.findById(req.params.id);
        res.status(200).json(dashboard);
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

// UPDATE Dashboard
app.put('/api/dashboard/:id', async (req, res) => {
    try {
        const dashboard = await Dashboard.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(dashboard);
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

// DELETE Dashboard
app.delete('/api/dashboard/:id', async (req, res) => {
    try {
        await Dashboard.findByIdAndDelete(req.params.id);
        res.status(200).send('Dashboard data deleted');
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

/* ---------------------- Appointment Routes ---------------------- */

app.post('/api/appointments', async (req, res) => {
    try {
        const appointment = await Appointment.create(req.body);
        res.status(200).json({ success: true, appointment });
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

app.get('/api/appointments', async (req, res) => {
    try {
        const appointments = await Appointment.find();
        res.status(200).json({ success: true, appointments });
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

app.get('/api/appointments/:id', async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);
        res.status(200).json(appointment);
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

app.put('/api/appointments/:id', async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(appointment);
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

app.delete('/api/appointments/:id', async (req, res) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        res.status(200).send('Appointment deleted');
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

/* ---------------------- Medicine Routes ---------------------- */

// CREATE Medicine
app.post('/api/medicines', async (req, res) => {
    try {
        const medicine = await Medicine.create(req.body);
        res.status(200).json({ success: true, medicine });
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

// READ all Medicines
app.get('/api/medicines', async (req, res) => {
    try {
        const medicines = await Medicine.find();
        res.status(200).json({ success: true, medicines });
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

// READ Medicine by ID
app.get('/api/medicines/:id', async (req, res) => {
    try {
        const medicine = await Medicine.findById(req.params.id);
        res.status(200).json(medicine);
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

// UPDATE Medicine by ID
app.put('/api/medicines/:id', async (req, res) => {
    try {
        const medicine = await Medicine.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(medicine);
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

// DELETE Medicine
app.delete('/api/medicines/:id', async (req, res) => {
    try {
        await Medicine.findByIdAndDelete(req.params.id);
        res.status(200).send('Medicine deleted');
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

/* ---------------------- Blood Bank Routes ---------------------- */

// CREATE Blood Record
app.post('/api/bloodblank', async (req, res) => {
    try {
        const bloodRecord = await BloodBlank.create(req.body);
        res.status(200).json({ success: true, bloodRecord });
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

// READ all Blood Records
app.get('/api/bloodblank', async (req, res) => {
    try {
        const bloodBlanks = await BloodBlank.find();
        res.status(200).json({ success: true, bloodBlanks });
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

// READ Blood Record by ID
app.get('/api/bloodblank/:id', async (req, res) => {
    try {
        const bloodRecord = await BloodBlank.findById(req.params.id);
        res.status(200).json(bloodRecord);
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

// UPDATE  Blood Record
app.put('/api/bloodblank/:id', async (req, res) => {
    try {
        const bloodRecord = await BloodBlank.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(bloodRecord);
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});

// DELETE Blood Record
app.delete('/api/bloodblank/:id', async (req, res) => {
    try {
        await BloodBlank.findByIdAndDelete(req.params.id);
        res.status(200).send('Blood record deleted');
    } catch (err) {
        res.status(500).json({ success: false, err });
    }
});


/* ---------------------- Server Start ---------------------- */

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
