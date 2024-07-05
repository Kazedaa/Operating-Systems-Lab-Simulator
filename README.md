# Virtual OS Lab Simulator
![OS LAB](https://img.shields.io/badge/OSLAB-v1.0-brightgreen)

Welcome to the Virtual OS Lab Simulator! This project simulates CPU Scheduling and InterProcess Communication (IPC) between web browser workers using pure JavaScript, CSS, and HTML.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)

## Introduction

The Virtual OS Lab Simulator is an educational tool designed to help users understand and visualize CPU Scheduling algorithms and InterProcess Communication (IPC) between web browser workers. It provides a graphical interface to experiment with various scheduling algorithms and observe how web workers communicate and share data.

## Features
### CPU Scheduling Algorithms
  - Simulation of various CPU Scheduling algorithms:
     - First Come First Server
     - Shortest Job First
     - Longest Job First
     - Preemptive Priority Scheduling
     - Non-Preemptive Priority Scheduling
     - Shortest Job Remaining First (Preemptive)
     - Longest Job Remaining First (Non-Preemptive)
     - Round Robin
     - Highest Response Ration Next
  - Visualization of CPU scheduling processes
      - Draws a Gantt Chart
      - Gives CPU Utilisation, Average Turn Around Time, Average Waiting Time
      - Allows Setting Context Switch Time
      - Outputs a Colorful Pie Chart For Waiting Time and Turn Around Time Sectored by processes
  
### Inter-Process Communication(IPC)
- InterProcess Communication (IPC) between web browser workers
- Implements Message Passing and Shared Memory Communication
- Direct / Indirect Message Passing
- Synchronous / Asynchronous Message Passing

## Technologies

This project is built using the following technologies:

- JavaScript
- HTML
- CSS

## Installation

To run the Virtual OS Lab Simulator locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/Kazedaa/Operating-Systems-Lab-Simulator
   cd Operating-Systems-Lab-Simulator
   ```
2. Navigate to The required folder and Open the HTML file with your preferred web browser
