# Passenger Counter App

A simple app to count and log the number of passengers entering a station.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Code Snippets](#code-snippets)
- [Links](#links)

## Overview

The Passenger Counter App counts entries of people entering a station, displays the count, and logs the entries.

## Features

- Increment and display passenger count.
- Save and log the entries for future reference.

## Technologies Used

- **HTML5**: For the structure.
- **CSS3**: For styling.
- **JavaScript**: For app functionality.

## Code Snippets

Example of using event listeners to handle button clicks:

```javascript
incrementBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;
});

saveBtn.addEventListener('click', () => {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
});
