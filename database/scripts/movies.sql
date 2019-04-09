CREATE DATABASE `video_movies`;
USE `video_movies`;

CREATE TABLE `movies`
(
`id` int(11) unsigned NOT NULL AUTO_INCREMENT,
`name` varchar(400) NOT NULL,
`origin_country` varchar(500),
`release_year` DATE NOT NULL,
`director` varchar(400) NOT NULL,
`cast` varchar(800) NOT NULL,
`active` TINYINT(1) DEFAULT 1,
  PRIMARY KEY(`id`)
)  ENGINE=InnoDB DEFAULT CHARSET=UTF8;


