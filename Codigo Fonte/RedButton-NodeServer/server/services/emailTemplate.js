var htmlTemplate = "";
htmlTemplate += "<div style=\"background-color: #F8F8F8; width: 100%; height: 100%;\">";
htmlTemplate += "	<div style=\"background-color: #479BBE; height: 30px; color: white; padding: 20px; border-radius:5px 5px 0 0;\">";
htmlTemplate += "		<a href=\"{{siteURL}}\" style=\"color: white; text-decoration: none;\"><h2 style=\"padding: 0px; margin: 0px;\">GO Reservas<\/h2><a>";
htmlTemplate += "	<\/div>";
htmlTemplate += "	<div style=\"background-color: white; color: black; padding: 20px; margin-right: 50px; margin-left: 50px;\">";
htmlTemplate += "		{{content}}";
htmlTemplate += "	<\/div>";
htmlTemplate += "<\/div>";
module.exports = htmlTemplate;
