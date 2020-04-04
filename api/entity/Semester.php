<?php
class Semester{

    private $sem_id;
    private $sem_name;

    /**
     * Semester constructor.
     */
    public function __construct()
    {

    }


    /**
     * @return mixed
     */
    public function getSemId()
    {
        return $this->sem_id;
    }

    /**
     * @param mixed $sem_id
     */
    public function setSemId($sem_id)
    {
        $this->sem_id = $sem_id;
    }

    /**
     * @return mixed
     */
    public function getSemName()
    {
        return $this->sem_name;
    }

    /**
     * @param mixed $sem_name
     */
    public function setSemName($sem_name)
    {
        $this->sem_name = $sem_name;
    }






}