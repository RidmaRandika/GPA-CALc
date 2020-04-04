<?php
/**
 * Created by IntelliJ IDEA.
 * User: Tharindu
 * Date: 06/08/2019
 * Time: 09:24 PM
 */
class DBConnection
{
    private $connection;
    private $host = "localhost";
    private $user = "root";
    private $password = "";
    private $databasse = "fosgpa";



    /**
     * DBConnection constructor.
     */
    public function __construct()
    {
        $this->connection = mysqli_connect($this->host, $this->user, $this->password, $this->databasse);
        if ($this->connection->connect_errno) {
            echo $this->connection->connect_errno;
            die();
        }
    }

    public function getConnection()
    {
        return $this->connection;
    }
}