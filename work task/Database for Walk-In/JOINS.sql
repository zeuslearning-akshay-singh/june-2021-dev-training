-- Show Database :
show databases;

--Select Database as Quantamn : 
use quantam;

-- View Tables: 
show tables;

-- Select Queries: 
select * from user; 

-- UUID Demo
select UUID();

-- Drop databases
drop database quantam;

-- Select, Update and Delete Commands for Quantam database

select * from walk_in ;
ALTER TABLE walk_in ADD COLUMN package varchar(25) not null;
ALTER TABLE walk_in drop COLUMN package ;
DELETE FROM walk_in WHERE walk_in_id = 3;


insert into walk_in(walk_in_title,start_date,end_date,things_to_remember,GUID,location_id,internship,internship_drive_id) values("Walk In for Multiple Job Roles",'2021-07-03','2021-07-04',"- Please report 30 MINUTES prior to your reporting time. - Download your Hall Ticket from below and carry it with you during your Walk-In.", UUID(),1,1,1);
insert into walk_in(walk_in_title,start_date,end_date,things_to_remember,GUID,location_id,internship) values("Walk In for Designer Job Role",'2021-07-10','2021-07-11',"- Please report 30 MINUTES prior to your reporting time. - Download your Hall Ticket from below and carry it with you during your Walk-In.", UUID(),1,0);
insert into walk_in(walk_in_title,start_date,end_date,things_to_remember,GUID,location_id,internship) values("Walk In for Design and Development Job Role",'2021-07-10' ,'2021-07-11',"- Please report 30 MINUTES prior to your reporting time. - Download your Hall Ticket from below and carry it with you during your Walk-In.", UUID(),1,0);

select * from user;
insert into user(email_id) values("abc@gmail.com");
insert into user(email_id) values("def@gmail.com");
insert into user(email_id) values("ghi@gmail.com");
insert into user(email_id) values("jkl@gmail.com");
insert into user(email_id) values("mno@gmail.com");

select * from job_role;
ALTER TABLE job_role DROP COLUMN package;

insert into job_role(designation, package, job_description,job_requirement) values("Instructional Designer","Rs. 5,00,000 lpa","- Generate highly interactive and innovative instructional strategies for e-learning solutions - Develop course structure and learning specifications addressing the requirements of the target audience - Construct appropriate testing strategies to ensure learners' understanding and performance - Address usability issues - Keep abreast of new trends in e-learning - Ensure that the instructional strategies are as per global standards - Prepare instructional design checklists and guidelines - Check for quality assurance","- Experience in creating instructional plans and course maps. - Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction - Awareness of different instructional design models and familiarity with instructional and learning theories - Awareness of latest trends in e-learning and instructional design - Strong client consulting/interfacing skills. - Ability to guide clients to focus on specific objectives and teaching points - Strong meeting facilitation, presentation and interpersonal skills - A thorough understanding of the web as an instructional medium - Post graduate degree in Education, Instructional Design, Mass Communication or Journalism");
insert into job_role(designation, package, job_description,job_requirement) values("Software Engineer","Rs. 5,00,000 lpa","- Generate highly interactive and innovative instructional strategies for e-learning solutions - Develop course structure and learning specifications addressing the requirements of the target audience - Construct appropriate testing strategies to ensure learners' understanding and performance - Address usability issues - Keep abreast of new trends in e-learning - Ensure that the instructional strategies are as per global standards - Prepare instructional design checklists and guidelines - Check for quality assurance","- Experience in creating instructional plans and course maps. - Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction - Awareness of different instructional design models and familiarity with instructional and learning theories - Awareness of latest trends in e-learning and instructional design - Strong client consulting/interfacing skills. - Ability to guide clients to focus on specific objectives and teaching points - Strong meeting facilitation, presentation and interpersonal skills - A thorough understanding of the web as an instructional medium - Post graduate degree in Education, Instructional Design, Mass Communication or Journalism");
insert into job_role(designation, package, job_description,job_requirement) values("Software Quality Engineer","Rs. 5,00,000 lpa","- Generate highly interactive and innovative instructional strategies for e-learning solutions - Develop course structure and learning specifications addressing the requirements of the target audience - Construct appropriate testing strategies to ensure learners' understanding and performance - Address usability issues - Keep abreast of new trends in e-learning - Ensure that the instructional strategies are as per global standards - Prepare instructional design checklists and guidelines - Check for quality assurance","- Experience in creating instructional plans and course maps. - Experience in the use of media like graphics, illustrations, photographs, audio, video, animations, and simulations in instruction - Awareness of different instructional design models and familiarity with instructional and learning theories - Awareness of latest trends in e-learning and instructional design - Strong client consulting/interfacing skills. - Ability to guide clients to focus on specific objectives and teaching points - Strong meeting facilitation, presentation and interpersonal skills - A thorough understanding of the web as an instructional medium - Post graduate degree in Education, Instructional Design, Mass Communication or Journalism");

select * from location;

insert into location(address_line1, address_line2, address_line3 , city, zip_code, phone_number) values("Zeus Systems Pvt. Ltd." , "1402, 14th Floor, Tower B, Peninsula Business Park., Ganpatrao Kadam Marg", "Lower Parel (W)" , "Mumbai" , "400 013", "91-22-66600000");
insert into location(address_line1, address_line2, address_line3 , city, zip_code, phone_number) values("Zeus Systems Pvt. Ltd." , "2041, 7th Floor, Tower A, IT Business Park.", "Rajajinagar" , "Bangalore" , "530 068", "91-22-66600000");

UPDATE location SET phone_number = "91-22-66600000" WHERE location_id = 1;
UPDATE location SET zip_code = "400 013" WHERE location_id = 1;

select * from time_slot;
insert into time_slot(start_time,end_time) values("9:00 AM","11:00 AM");
insert into time_slot(start_time,end_time) values("1:00 PM","3:00 PM");

select * from walk_in_has_time_slot;

insert into walk_in_has_time_slot(walk_in_id,time_slot_id,date,total) values(1,1,'2020-07-03',50);
insert into walk_in_has_time_slot(walk_in_id,time_slot_id,date,total) values(1,2,'2020-07-03',50);

select * from registrated_user;

insert into registrated_user(user_id, walk_in_time_slot_id, resume) values(1, 1, "https://www.gstore.com/resume/user1/");
insert into registrated_user(user_id, walk_in_time_slot_id, resume) values(2, 2, "https://www.gstore.com/resume/user2/");

select * from walk_in_has_job_role;

insert into walk_in_has_job_role (walk_in_id, job_id) values (1, 1);
insert into walk_in_has_job_role (walk_in_id, job_id) values (1, 2);
insert into walk_in_has_job_role (walk_in_id, job_id) values (1, 3);
insert into walk_in_has_job_role (walk_in_id, job_id) values (2, 1);
insert into walk_in_has_job_role (walk_in_id, job_id) values (3, 1);
insert into walk_in_has_job_role (walk_in_id, job_id) values (3, 2);

select * from preference;

insert into preference (register_id, walk_in_job_role_id) values (1, 1);
insert into preference (register_id, walk_in_job_role_id) values (1, 3);

select * from instruction_type_enum ;
insert into instruction_type_enum (Instruction_text, Instruction_descp) values('General Instructions','It provides general instructions');
insert into instruction_type_enum (Instruction_text, Instruction_descp) values('Instructions for the Exam','It provides instructions for exam');
insert into instruction_type_enum (Instruction_text, Instruction_descp) values('Minimum System Requirements','It provides Minimum System Requirments');
insert into instruction_type_enum (Instruction_text, Instruction_descp) values('Process','It provides instructions related to process' );

select * from round;
insert into round (rounds) values (" Round I : 4th August, 2018 Aptitude Test : 25 Questions Round II (Interview) : 4th August, 2018.");

select * from walk_in_has_instruction;
insert into walk_in_has_instruction(walk_in_id, Instruction_type_enum_id, type, Instruction) values (1,1,1,"- We have a two–year indemnity for permanent candidates. We will provide training to the selected candidates. - Candidates who have appeared for any test held by Zeus Learning in the past 12 months will not be allowed to appear for this recruitment test.");
insert into walk_in_has_instruction(walk_in_id, Instruction_type_enum_id, type, Instruction) values (1,2,2,"- Candidates are requested to log in half an hour prior to the exam start time as they would need to capture their image using a web camera. By taking this test, you are permitting the examination system to capture your video for invigilation purposes. - Candidates would not be able to appear for the exam if the web camera attached to their system is not functional. - The web camera of your system must be enabled and must remain switched on throughout the examination. In the event of non-receipt of a webcam, your examination will be considered null and void. - Candidate’s audio and video will be recorded during the examination and will also be monitored by a live proctor. The proctor may terminate your exam in case he/she observes any malpractice during the exam. - Candidates are advised to use their own Laptop/PC with a stable internet connection (min 1 Mbps) during the exam. - Candidates cannot use an iOS system/device for this exam.");
insert into walk_in_has_instruction(walk_in_id, Instruction_type_enum_id, type, Instruction) values (1,3,3,"- Personal Laptop or Desktop computer in working condition with good quality camera (you can use Windows 7 and above). - The latest version of Google Chrome Browser only. - Please note that Internet speed should be minimum 1 Mbps. - Do not use a MacBook or iPad for the proctored exam.");
insert into walk_in_has_instruction(walk_in_id, Instruction_type_enum_id, round_id ,type, Instruction) values (1,4,1,4,"- Every round is an elimination round. Candidates need to clear all rounds to get selected.");

select * from internship_drive;
insert into internship_drive(degree) values ("Internship Opportunity for MCA Students");

select job_id, designation from job_role;
select location_id, city from location;
select walk_in_id,walk_in_title,start_date, end_date,location_id from walk_in;
select * from walk_in_has_job_role;

-- JOINS Query ----------------------------------------------

select walk_in_id, walk_in_title, start_date, end_date, walk_in.location_id, location.city
from walk_in inner join location 
on walk_in.location_id = location.location_id;

select job_role.job_id, walk_in_has_job_role.walk_in_id
from walk_in inner Join (walk_in_has_job_role inner join job_role
on walk_in_has_job_role.job_id = job_role.job_id)
on walk_in.walk_in_id = walk;

select walk_in_id, walk_in_title, start_date, end_date, walk_in.location_id, location.city, job_role_id
from walk_in_has_job_role inner join (walk_in inner join location 
on walk_in.location_id = location.location_id
where start_date >=  '2021-07-01')
on walk_in_has_job_role.walk_in_id = walk_in.walk_in_id;

 
select walk_in.walk_in_title, walk_in.start_date,walk_in.end_date,job_role.designation, location.city
from (((job_role
inner join walk_in_has_job_role 
on walk_in_has_job_role.job_id = job_role.job_id)
inner join walk_in on walk_in_has_job_role.walk_in_id = walk_in.walk_in_id )
inner join location on walk_in.location_id = location.location_id )
where walk_in.start_date >= '2021-07-01';

-- WalkIn Table as default using right join 
select walk_in.GUID, walk_in.walk_in_title, walk_in.start_date, walk_in.end_date, job_role.designation, location.city
from (((job_role
right join walk_in_has_job_role 
on walk_in_has_job_role.job_id = job_role.job_id)
right join walk_in on walk_in_has_job_role.walk_in_id = walk_in.walk_in_id )
inner join location on walk_in.location_id = location.location_id )
where walk_in.start_date >= '2021-07-01' ;

-- Stored Procedure as Practice Query

DELIMITER // 
create procedure GetWalkIn()
begin 
select  walk_in.GUID, walk_in.walk_in_title, walk_in.start_date, walk_in.end_date, job_role.designation, location.city
from (((job_role
right join walk_in_has_job_role 
on walk_in_has_job_role.job_id = job_role.job_id)
right join walk_in on walk_in_has_job_role.walk_in_id = walk_in.walk_in_id )
inner join location on walk_in.location_id = location.location_id )
where walk_in.start_date >= '2021-07-01' ;
end //  
DELIMITER ;

-- Joins for Main Frame 
select * from location;

select * 
from walk_in 
where start_date >= '2021-07-01';

select walk_in.walk_in_id,  walk_in.GUID, location.location_id, location.city
from walk_in 
inner join location 
on walk_in.location_id = location.location_id
where start_date >= '2021-07-01';

select w.GUID, w.walk_in_id, r.designation from ((walk_in w 
inner join 
walk_in_has_job_role j 
on w.walk_in_id = j.walk_in_id)
inner join job_role r 
on j.job_id = r.job_id)
where w.start_date >= '2021-07-01';

-- Joins for practice Query 

select walk_in.walk_in_title, walk_in.start_date, walk_in.end_date, job_role.designation, location.city
from ((((job_role
right join walk_in_has_job_role 
on walk_in_has_job_role.job_id = job_role.job_id)
right join walk_in on walk_in_has_job_role.walk_in_id = walk_in.walk_in_id )
inner join location on walk_in.location_id = location.location_id )
inner join walk_in_has_instruction on walk_in.walk_in_id = walk_in_has_instruction.walk_in_id)
inner join instruction_type_enum on walk_in_has_instruction.walk_in_id = instruction_type_enum.Instruction_type_enum_id;

select * from walk_in_has_instruction;
select * from instruction_type_enum;
select * from round;
select * from walk_in;

-- WalkIn Table for Instructions using left join 
select w.walk_in_id, i.Instruction , e.Instruction_text, r.rounds from ((walk_in w 
inner join walk_in_has_instruction i 
on w.walk_in_id = i.walk_in_id) 
inner join instruction_type_enum e 
on i.Instruction_type_enum_id = e.Instruction_type_enum_id)
left join round r on i.round_id = r.round_id
where w.walk_in_id = 1; 


select * from time_slot;
select * from walk_in_has_time_slot;
select * from walk_in;

-- WalkIn Table for time slot using inner join 

select w.walk_in_id, s.start_time, s.end_time from (time_slot s
right join walk_in_has_time_slot t
on s.time_slot_id = t.time_slot_id)
inner join walk_in w 
on t.walk_in_id = w.walk_in_id 
where w.walk_in_id = 1;


select * from job_role;
select * from walk_in_has_job_role;
select * from walk_in
where walk_in_id = 1;

-- WalkIn Table for preferences using inner join
select w.GUID, r.designation from ((walk_in w 
inner join 
walk_in_has_job_role j 
on w.walk_in_id = j.walk_in_id)
inner join job_role r 
on j.job_id = r.job_id)
where w.walk_in_id = 1 ;


-- WalkIn Table for Job Profile using inner join

select w.GUID, r.designation, r.package, r.job_description, r.job_requirement from ((walk_in w 
inner join 
walk_in_has_job_role j 
on w.walk_in_id = j.walk_in_id)
inner join job_role r 
on j.job_id = r.job_id)
where w.walk_in_id = 1 ;



-- Hall ticket 
select * from walk_in;
select * from registered_user;
select * from location;
select * from time_slot;
select * from walk_in_has_time_slot;

select w.GUID, t.date, s.start_time ,s.end_time, w.things_to_remember,
l.address_line1,l.address_line2, l.city, l.zip_code,l.phone_number from (((registrated_user r
inner join walk_in_has_time_slot t
on r.walk_in_time_slot_id = t.walk_in_time_slot_id)
inner join time_slot s on t.time_slot_id = s.time_slot_id)
inner join walk_in w on t.walk_in_id = w.walk_in_id)
inner join location l on l.location_id = w.location_id
where r.register_id = 1 ;


-- Overall Stored Procedures 

-- 1. Stored procedure for Main Frame ::

DELIMITER // 
create procedure GetWalkIn(IN walkInDate DATE)
begin 
select GUID, walk_in_id, walk_in_title, start_date, end_date 
from walk_in 
where start_date >= walkInDate;

select walk_in.walk_in_id,  walk_in.GUID, location.location_id, location.city
from walk_in 
inner join location 
on walk_in.location_id = location.location_id
where start_date >= walkInDate;

select w.GUID, w.walk_in_id, r.designation from ((walk_in w 
inner join 
walk_in_has_job_role j 
on w.walk_in_id = j.walk_in_id)
inner join job_role r 
on j.job_id = r.job_id)
where w.start_date >= walkInDate;
end //  
DELIMITER ;

Drop procedure if exists GetWalkIn;
call GetWalkIn('2021-07-01');

-- 2. Stored Procedure for GetInstruction

DELIMITER // 
create procedure GetInstruction(IN walkIn INT)
begin 
select w.GUID,w.walk_in_id, i.Instruction , e.Instruction_text, r.rounds from ((walk_in w 
inner join walk_in_has_instruction i 
on w.walk_in_id = i.walk_in_id) 
inner join instruction_type_enum e 
on i.Instruction_type_enum_id = e.Instruction_type_enum_id)
left join round r on i.round_id = r.round_id
where w.walk_in_id = walkIn; 
end //  
DELIMITER ;

call GetInstruction(1);
Drop procedure if exists GetInstruction;

-- 3. Stored procedure Timeslot

DELIMITER // 
create procedure GetTimeslot(IN walkIn INT)
begin
 
select w.GUID, w.walk_in_id, s.start_time, s.end_time from (time_slot s
right join walk_in_has_time_slot t
on s.time_slot_id = t.time_slot_id)
inner join walk_in w 
on t.walk_in_id = w.walk_in_id 
where w.walk_in_id = walkIn;

end //  
DELIMITER ;

call GetTimeslot(1);

Drop procedure if exists GetTimeslot;

-- 4. Stored Procedure for Preferences 

DELIMITER // 
create procedure GetPreferences(IN walkIn INT)
begin 

select w.GUID, r.designation from ((walk_in w 
inner join 
walk_in_has_job_role j 
on w.walk_in_id = j.walk_in_id)
inner join job_role r 
on j.job_id = r.job_id)
where w.walk_in_id = walkIn ;

end //  
DELIMITER ;

call GetPreferences(1);

Drop procedure if exists GetPreferences;

-- 5. Stored Procedure  for Job Roles 
DELIMITER // 
create procedure GetJobProfile(IN walkIn INT)
begin 

select w.GUID, r.designation, r.package, r.job_description, r.job_requirement from ((walk_in w 
inner join 
walk_in_has_job_role j 
on w.walk_in_id = j.walk_in_id)
inner join job_role r 
on j.job_id = r.job_id)
where w.walk_in_id = walkIn ;

end //  
DELIMITER ;

call GetJobProfile(1);

Drop procedure if exists GetJobProfile;

-- 6. Stored Procedure for Hall ticket  

DELIMITER // 
create procedure GetHallTicket(IN regUser INT)
begin 

select w.GUID, t.date, s.start_time ,s.end_time, w.things_to_remember,
l.address_line1,l.address_line2, l.address_line3 ,l.city, l.zip_code,l.phone_number from (((registrated_user r
inner join walk_in_has_time_slot t
on r.walk_in_time_slot_id = t.walk_in_time_slot_id)
inner join time_slot s on t.time_slot_id = s.time_slot_id)
inner join walk_in w on t.walk_in_id = w.walk_in_id)
inner join location l on l.location_id = w.location_id
where r.register_id = regUser ;

end //  
DELIMITER ;

call GetHallTicket(1);

Drop procedure if exists GetHallTicket;

-- Calling All the Stored Procedure 
call GetWalkIn();
call GetJobProfile();
call GetHallTicket();
call GetInstruction();
call GetTimeslot ();
call GetPreferences();
