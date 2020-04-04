<?php
class AssoDB{

    private $asso_id;
    private $sem_id;
    private $sub_id;
    private $cuz_id;

    /**
     * AssoDB constructor.
     */
    public function __construct()
    {
    }


    /**
     * @return mixed
     */
    public function getAssoId()
    {
        return $this->asso_id;
    }

    /**
     * @param mixed $asso_id
     */
    public function setAssoId($asso_id)
    {
        $this->asso_id = $asso_id;
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





}