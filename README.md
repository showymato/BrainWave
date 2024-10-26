# MedDroneX

MedDroneX is an intelligent logistics management solution designed for healthcare, ensuring that medical supplies and sensitive products reach their destination safely and in optimal condition. By leveraging real-time monitoring, automated compliance tracking, and advanced analytics, BrainWave optimizes delivery operations, enhancing quality control and regulatory compliance for healthcare logistics.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Usage](#usage)
- [OnDemand Integrations](#ondemand-integrations)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## Features

1. *Condition-Based Delivery Score Analytics*  
   - Analyzes transport condition data in real-time to score and assess each delivery, providing insights into quality control and ensuring compliance.

2. *In-Transit Monitoring and Alerts*  
   - Real-time alerts notify users when environmental conditions (like temperature or humidity) go beyond set thresholds, enabling quick corrective actions.

3. *Automated Compliance Reporting*  
   - Generates compliance reports for each delivery, automating the tracking and documentation required for regulatory adherence.

4. *Historical Performance Analysis*  
   - Aggregates past data to analyze trends in delivery performance, offering insights to improve operational efficiency.

## Tech Stack

- *Frontend*: React for the webapp, flutter for the mobile app
- *Backend*: OnDemand API for real-time data processing, analytics, and storage
- *Database*: OnDemand cloud storage for secure data management, MongoDB for various details about the drones
- *Analytics*: OnDemand analytics and reporting for real-time data visualization

---

## Getting Started

Follow these instructions to get a local copy of the project running.

### Installation

1. *Clone the repository:*

   bash
   git clone https://github.com/showymato/BrainWave.git
   cd BrainWave/Frontend
   

2. *Install dependencies:*

   npm i --force
   

4. *Set up the OnDemand API*:
   - Create an account at [OnDemand](https://app.on-demand.io/) and access the [API](https://api.on-demand.io/).
   - Obtain the necessary API keys for data access.

5. *Configure environment variables*:
   - Create a .env file in the root directory and add your OnDemand API keys.
   plaintext
   ONDEMAND_API_KEY=your_api_key_here
   

---

## Configuration

In lib/config.dart, update the base API URLs as needed:

dart
const String apiBaseURL = "https://api.on-demand.io/";


Replace the placeholders with your API information.

---

## Usage

### Condition-Based Delivery Score Analytics

MedDroneX continuously collects and analyzes metrics during delivery (e.g., temperature, vibration) and provides a real-time score. Access the dashboard to view this score and see insights into delivery performance.

### Real-Time Monitoring & Alerts

If transport conditions exceed specified limits, BrainWave triggers an alert to notify the logistics team. These alerts can be viewed in the *Alerts* section of the dashboard.

### Compliance & Reports

Each completed delivery generates a compliance report accessible via the dashboard or can be downloaded as a PDF.

---

## OnDemand Integrations

MedDroneX relies on *OnDemand* for several core functions:

- *Real-Time Data Processing*: Collects live condition metrics and supports alerting functions.
- *Analytics Dashboard*: Analyzes and scores deliveries, generating interactive insights.
- *Compliance Reports*: Automates report generation to meet regulatory requirements.

---

## Future Enhancements

- *Enhanced Predictive Analytics*: Implement machine learning for predictive insights.
- *Automated Route Optimization*: Adjust routes in real-time based on condition data and alerts.
- *Mobile Compatibility*: Expand functionality to mobile apps for quick, on-the-go access.

---

## License

Distributed under the MIT License. See LICENSE for more information.

---
