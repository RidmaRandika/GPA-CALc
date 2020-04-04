<?php

require_once __DIR__."/../../dto/CourseDTO.php";
require_once __DIR__ ."/../CourseService.php";
require_once __DIR__."/../../entity/Course.php";
require_once __DIR__."/../../repo/impl/CourseRepoImpl.php";
require_once __DIR__."/../../db/dbConnection.php";

class CourseServiceImpl implements CourseService{

    private $courserepo;

    /**
     * CourseServiceImpl constructor.
     */
    public function __construct()
    {
        $this->courserepo=new CourseRepoImpl();
    }

    public function getGrade():array
    {
        try{

            $connection = (new DBConnection())->getConnection();
            $this->courserepo->setConnection($connection);
            return $this->courserepo->getGrade();

        }catch (Exception $exception){
            echo "error...!";
        }

    }

    public function getGradeCount():int
    {
        try{

            $connection = (new DBConnection())->getConnection();
            $this->courserepo->setConnection($connection);
            return $this->courserepo->getGradeCount();

        }catch (Exception $exception){
            echo "error...!";
        }

    }

    public function getTotalCredit($com):int
    {

        try{
            $connection = (new DBConnection())->getConnection();
            $this->courserepo->setConnection($connection);
            return $this->courserepo->getTotalCredit($com);



        }catch (Exception $exception){

            echo "Error in Business";
        }

    }
}