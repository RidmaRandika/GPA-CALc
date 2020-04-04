<?php


require_once __DIR__."/../CourseRepo.php";
require_once __DIR__."/../../entity/Course.php";
require_once __DIR__."/../../dto/CourseDTO.php";

class CourseRepoImpl implements CourseRepo {


    private $connection;

    public function setConnection($connection)
    {
        $this->connection=$connection;
    }

    public function getGrade():array
    {

        $result=  $this->connection->query("SELECT * FROM course_unit");
        return $result->fetch_all();

    }

    public function getGradeCount():int
    {

        $result=  $this->connection->query("SELECT COUNT(*) AS cnt FROM course_unit");
        $data = mysqli_fetch_assoc($result);
        return $data['cnt'];

    }

    public function getTotalCredit($com):int
    {
        $result=  $this->connection->query("SELECT SUM(credit) as totc from course_unit");
        $data = mysqli_fetch_assoc($result);
        return $data['totc'];

    }
}