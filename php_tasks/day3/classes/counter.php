<?php

class counter implements counter_interface
{
    private $count;

    public function __construct()
    {
        $this->count = $this->get_count();
    }

    public function get_count()
    {
        if (file_exists(__COUNTER_FILE__)) {
            return intval(file_get_contents(__COUNTER_FILE__));
        } else {
            return 0;
        }
    }

    private function increment()
    {
        if(!isset($_SESSION[__SESSION_KEY_COUNTER__]))
        {
            $this->count++;
            $_SESSION[__SESSION_KEY_COUNTER__]=true;
            return $this->count;
        }
        else{
            return false;
        }


    }

    private function update()
    {
        $fp=fopen(__COUNTER_FILE__,"w+");
        fwrite($fp,$this->count);
        fclose($fp);
    }


    public function update_and_increment()
    {
        if($this->increment()!=false)
        {
            $this->update();
        }
    }
}
