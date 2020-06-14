const express = require('express');
express().use(express.static('./public')).listen('8080', () => {
  console.log("listining on 8080");
});
