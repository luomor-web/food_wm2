
<?php
return [
    'default'         => env('database.driver', 'mysql'),
    'time_query_rule' => [],
    'auto_timestamp'  => true,
    'datetime_format' => false,
    'datetime_field'  => '',
    'connections'     => [
        'mysql' => [
            'type'            => env('database.type', 'mysql'),
            'hostname'        => env('database.hostname', 'food-db'),
            'database'        => env('database.database', 'wm'),
            'username'        => env('database.username', 'root'),
            'password'        => env('database.password', 'root'),
            'hostport'        => env('database.hostport', '3306'),
            'params'          => [],
            'charset'         => env('database.charset', 'utf8'),
            'prefix'          => env('database.prefix', 'food_'),
            'deploy'          => 0,
            'rw_separate'     => false,
            'master_num'      => 1,
            'slave_no'        => '',
            'fields_strict'   => true,
            'break_reconnect' => false,
            'trigger_sql'     => env('app_debug', true),
            'fields_cache'    => false,
        ]
    ]
];
