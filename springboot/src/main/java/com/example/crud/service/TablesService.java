package com.example.crud.service;

import com.example.crud.model.Tables;
import com.example.crud.repository.TablesRepository;

import jakarta.persistence.EntityNotFoundException;
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

    public void update(Long id, Tables table){
        // Verificar si la tabla con el ID proporcionado existe en la base de datos
        Optional<Tables> existingTableOptional = tablesRepository.findById(id);

        if (existingTableOptional.isPresent()) {
            Tables existingTable = existingTableOptional.get();

            // Actualizar los campos necesarios
            // existingTable.setNumberTable(table.getNumberTable());
            existingTable.setCapacityTable(table.getCapacityTable());
            existingTable.setStatusTable(table.getStatusTable());

            // Guardar la tabla actualizada en la base de datos
            tablesRepository.save(existingTable);
        } else {
            // Manejar el caso en el que la tabla con el ID proporcionado no existe
            // Puedes lanzar una excepción o manejarlo de alguna otra manera según tus requisitos.
            throw new EntityNotFoundException("No se encontró la tabla con el ID: " + id);
        }
    }

    public void delete(Long id){
        tablesRepository.deleteById(id);
    }
}
