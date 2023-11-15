package com.example.crud.controller;

import com.example.crud.model.Tables;
import com.example.crud.service.TablesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(path = "tables")
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

    @PutMapping("/{tableId}")
    public void updateTable(@PathVariable("tableId") Long id, @RequestBody Tables table){
        tablesService.update(id, table);
    }

    @DeleteMapping("/{tableId}")
    public void deleteTable(@PathVariable("tableId") Long id){
        tablesService.delete(id);
    }
}
