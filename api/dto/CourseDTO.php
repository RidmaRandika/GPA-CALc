<?php

class CourseDTO{

    private  $cuz_id;
    private  $cuz_name;
    private  $credit;

    /**
     * Course constructor.
     */
    public function __construct()
    {
    }

    /**
     * @return mixed
     */
    public function getCuzId()
    {
        return $this->cuz_id;
    }

    /**
     * @param mixed $cuz_id
     */
    public function setCuzId($cuz_id)
    {
        $this->cuz_id = $cuz_id;
    }

    /**
     * @return mixed
     */
    public function getCuzName()
    {
        return $this->cuz_name;
    }

    /**
     * @param mixed $cuz_name
     */
    public function setCuzName($cuz_name)
    {
        $this->cuz_name = $cuz_name;
    }

    /**
     * @return mixed
     */
    public function getCredit()
    {
        return $this->credit;
    }

    /**
     * @param mixed $credit
     */
    public function setCredit($credit)
    {
        $this->credit = $credit;
    }



}