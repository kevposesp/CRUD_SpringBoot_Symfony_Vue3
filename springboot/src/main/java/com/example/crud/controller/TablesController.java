package com.example.crud.controller;

import com.example.crud.model.Tables;
import com.example.crud.service.TablesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/tables")
public class TablesController {

    @Autowired
    private TablesService tablesService;

    @GetMapping
    public List<Tables> getAll() {
        return tablesService.getTables();
    }

    @GetMapping("/{tableId}")
    public Optional<Tables> getAll(@PathVariable("tableId") Long id) {
        return tablesService.getTable(id);
    }

    @PostMapping
    public void saveTable(@RequestBody Tables table){
        tablesService.save(table);
    }

    @DeleteMapping("/{tableId}")
    public void deleteTable(@PathVariable("tableId") Long id){
        tablesService.delete(id);
    }
}
