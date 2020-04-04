<?php
require_once __DIR__ . '/../service/impl/CourseServiceImpl.php';
require_once __DIR__ . '/../entity/Course.php';


$method= $_SERVER['REQUEST_METHOD'];
$courseservice = new CourseServiceImpl();

switch ($method){
    case "POST":

        break;
    case "GET":
        $operation = $_GET['operation'];
        $com =0;

        switch ($operation) {
            case "add":
                break;
            case "getAll":
                echo json_encode($courseservice->getGrade());
                break;
            case "delete":
                break;
            case "count":
                echo $courseservice->getGradeCount();
                break;
            case "credit":
                echo $courseservice->getTotalCredit($com);
                break;
        }


        break;
}
