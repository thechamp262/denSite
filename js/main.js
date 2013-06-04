$(function(){
	console.log("ready");
	var nav_home = $("#home"),
		nav_writing = $("#writing_s"),
		nav_contact = $("#contact_me"),
		color_change = function(color){
			$("body").fadeIn("slow", function(){
				$("body").css("background-color", color);
				return false;
			});
			return false
		};
		nav_home.each(function(){
			current_color = $("body").css("background-color");
			that = $(this);
			
			that
				.bind("mouseenter", function(e){
					color_change("#faeb7a");
					return false;
				})
				
				.bind("mouseleave", function(e){
					color_change(current_color);
					return false
				})
		})//ends .each
				
		
		nav_writing.each(function(){
			current_color = $("body").css("background-color");
			that = $(this);
			
			that
				.bind("mouseenter", function(e){
					color_change("#65b6f4");
					return false
				})//ends mouseenter
				
				.bind("mouseleave", function(e){
					color_change(current_color);
					return false
				});//ends mouse leave
		});//ends .each
		
		nav_contact.each(function(){
			current_color = $("body").css("background-color");
			that = $(this);
			
			that
				.bind("mouseenter", function(e){
					color_change("#abf18e");
					that.append("<form id='contact_form'><label for='first_name'>First Name</label><input type='text' placeholder='Jane' name='first_name'/><label  for='last_name'>Last Name</label><input type='text' placeholder='Doe' name='last_name'/><label for='phone_number'>Phone Number</label><input type='tel' placeholder='(222)222-2222' name='phone_number'/><label for='email'>Email Address</label><input type='email' placeholder='jane@email.com' name='email'/><label for='message'>Messages</label><input type='text' placeholder='Enter Message Here!' name='message' id='message'/><button type='submit'>Submit</button></form>");
					return false
				}) //ends mouseenter
				
				.bind("mouseleave", function(e){
					color_change(current_color);
					that.find("#contact_form").remove();
					return false
				});//ends mouseleave
		});// ends .each

		console.log($("body").css("background-color"));
		//color_change();
		console.log(nav_home, nav_writing, nav_contact);
});