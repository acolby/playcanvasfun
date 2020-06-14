const express = require('express');
express().use(express.static('./build')).listen('8080', () => {
  console.log("listining on 8080");
});
