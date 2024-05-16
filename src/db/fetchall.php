<?php   
$connect = new PDO("mysql:host=localhost;dbname=m426projekt", "root", "");
$received_data = json_decode(file_get_contents("php://input"));
 
$data = array();
if($received_data->action == 'fetchall') //axios.post('fetchall.php', { action:'fetchall'
{
    $query = "
     SELECT * FROM filme
     ORDER BY id DESC
     ";
    $statement = $connect->prepare($query);
    $statement->execute();
    while($row = $statement->fetch(PDO::FETCH_ASSOC))
    {
      $data[] = $row;
    }
    // Nach dem while-Schleifenblock hinzufügen
var_dump($data); // Oder: print_r($data);

    echo json_encode($data);
     
}
?>