// Copyright (c) 2025 Isaaq Simon All rights reserved
//
// Created by: Isaaq Simon
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict";
function calculatePay() {
            let hours = parseFloat(document.getElementById("hours").value);
            let rate = parseFloat(document.getElementById("rate").value);
            
            if (isNaN(hours) || isNaN(rate) || hours <= 0 || rate <= 0) {
                document.getElementById("result").innerText = "Please enter valid numbers.";
                return;
            }
            
            let grossPay = hours * rate;
            let yearlyIncome = grossPay * 52; 
            let tax = yearlyIncome * 0.2005; 
            let netPay = yearlyIncome - tax;
            let weeklyNetPay = netPay / 52;
            
            document.getElementById("result").innerHTML = `
                Gross Pay: $${grossPay.toFixed(2)}<br>
                Weekly Net Pay: $${weeklyNetPay.toFixed(2)}<br>
                Government Tax: $${(tax / 52).toFixed(2)} per week
            `;
        }