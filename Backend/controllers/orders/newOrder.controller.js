import { spawn } from "child_process"
import path from "path";
import { fileURLToPath } from 'url';

// Create __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const newOrderData = async (req, res) => {
    const { OrderType, altitude, latitude, longitude, orderId } = req.body;
    console.log(OrderType)

     // Use path to resolve the absolute path to the Python script
     const pythonScriptPath = path.resolve(__dirname, '../../Drone_Code.py');

     // Run the Python script with latitude, longitude, and altitude as arguments
     const pythonProcess = spawn('python', [pythonScriptPath, latitude, longitude, altitude]);
 

    pythonProcess.stdout.on('data', (data) => {
        console.log(`Python Output: ${data}`);
    });

    pythonProcess.stderr.on('data', (error) => {
        console.error(`Python Error: ${error}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`Python script closed with code ${code}`);
        res.status(200).send('Drone coordinates sent.');
    });
}