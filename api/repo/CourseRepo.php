<?php
/**
 * Created by IntelliJ IDEA.
 * User: Ridma Randika
 * Date: 1/8/2020
 * Time: 11:05 PM
 */

require_once __DIR__."/../entity/Course.php";
require_once __DIR__."/../dto/CourseDTO.php";
interface CourseRepo{

    public function getGrade():array ;
    public function getGradeCount():int ;
    public function setConnection($connection);
    public function getTotalCredit($com):int;

}