<?php

class Subject{

    private $sub_id;
    private $sub_name;

    /**
     * Subject constructor.
     */
    public function __construct()
    {
    }

    /**
     * @return mixed
     */
    public function getSubId()
    {
        return $this->sub_id;
    }

    /**
     * @param mixed $sub_id
     */
    public function setSubId($sub_id)
    {
        $this->sub_id = $sub_id;
    }

    /**
     * @return mixed
     */
    public function getSubName()
    {
        return $this->sub_name;
    }

    /**
     * @param mixed $sub_name
     */
    public function setSubName($sub_name)
    {
        $this->sub_name = $sub_name;
    }




}