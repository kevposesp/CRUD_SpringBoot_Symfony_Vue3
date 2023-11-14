<?php

namespace App\Controller;

use App\Entity\Table;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TablesController extends AbstractController
{
    /**
     * @Route("/tables", name="tables", methods={"GET"})
     */
    public function index(ManagerRegistry $doctrine): Response
    {
        try {
            $repository = $doctrine->getManager()->getRepository(Table::class);
            $tables = $repository->findAll();

            $data = [];
            foreach ($tables as $table) {
                $data[] = [
                    'id' => $table->getId(),
                    'number' => $table->getNumber(),
                    'capacity' => $table->getCapacity(),
                    'status' => $table->getStatus()
                ];
            }

            return new JsonResponse($data, 200);
        } catch (\Exception $e) {
            // Manejar excepciones aquí y devolver una respuesta de error
            return new JsonResponse(['error' => 'Error al recuperar datos de la tabla.'], 500);
        }
    }

    /**
     * @Route("/table/{id}", name="getTable", methods={"GET"})
     */
    public function getById(Request $request, ManagerRegistry $doctrine, $id = null): Response
    {
        try {
            $repository = $doctrine->getManager()->getRepository(Table::class);
            $table = $repository->find($id);
            if (!$table) {
                return new JsonResponse(['error' => 'Mesa no encontrada.'], 404);
            }
            $data = [
                'id' => $table->getId(),
                'number' => $table->getNumber(),
                'capacity' => $table->getCapacity(),
                'status' => $table->getStatus()
            ];
            return new JsonResponse($data, 200);
        } catch (\Exception $e) {
            return new JsonResponse(['error' => 'Error al recuperar datos de la tabla.'], 500);
        }
    }

    /**
     * @Route("/table", name="create_table", methods={"POST"})
     */
    public function create(Request $request, ManagerRegistry $doctrine): Response
    {
        $jsonData = json_decode($request->getContent());
        try {
            $entityManager = $doctrine->getManager();
            $table = new Table();
            $table->setNumber($jsonData->number);
            $table->setCapacity($jsonData->capacity);
            $table->setStatus($jsonData->status);
            $entityManager->persist($table);
            $entityManager->flush();
            return new JsonResponse([
                "message" => "Mesa creada correctamente.",
                "code" => 201
            ], 201);
        } catch (\Exception $exception) {
            return new JsonResponse(['error' => 'Error al crear la mesa'], 409);
        }
    }

    /**
     * @Route("/table/{id}", name="update_table", methods={"PUT"})
     */
    public function update(Request $request, ManagerRegistry $doctrine, $id): Response
    {
        try {
            $entityManager = $doctrine->getManager();
            $repository = $entityManager->getRepository(Table::class);
            $table = $repository->find($id);

            if (!$table) {
                return new JsonResponse(['error' => 'Mesa no encontrada.'], 404);
            }

            $jsonData = json_decode($request->getContent());

            $table->setNumber($jsonData->number);
            $table->setCapacity($jsonData->capacity);
            $table->setStatus($jsonData->status);

            $entityManager->flush();

            return new JsonResponse([
                'message' => 'Mesa actualizada correctamente.',
                'code' => 200
            ], 200);
        } catch (\Exception $exception) {
            return new JsonResponse(['error' => 'Error al actualizar la mesa.'], 500);
        }
    }

    /**
     * @Route("/table/{id}", name="delete_table", methods={"DELETE"})
     */
    public function delete(ManagerRegistry $doctrine, $id): Response
    {
        try {
            $entityManager = $doctrine->getManager();
            $repository = $entityManager->getRepository(Table::class);
            $table = $repository->find($id);

            if (!$table) {
                return new JsonResponse(['error' => 'Mesa no encontrada.'], 404);
            }

            $entityManager->remove($table);
            $entityManager->flush();

            return new JsonResponse([
                'message' => 'Mesa eliminada correctamente.',
                'code' => 200
            ], 200);
        } catch (\Exception $exception) {
            return new JsonResponse(['error' => 'Error al eliminar la mesa.'], 500);
        }
    }
}
