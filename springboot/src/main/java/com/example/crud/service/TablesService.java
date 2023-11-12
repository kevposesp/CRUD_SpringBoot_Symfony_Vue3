package com.example.crud.service;

import com.example.crud.model.Tables;
import com.example.crud.repository.TablesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TablesService {
    @Autowired
    TablesRepository tablesRepository;

    public List<Tables> getTables(){
        return tablesRepository.findAll();
    }

    public Optional<Tables> getTable(Long id){
        return tablesRepository.findById(id);
    }

    public void save(Tables table){
        tablesRepository.save(table);
    }

    public void delete(Long id){
        tablesRepository.deleteById(id);
    }
}
