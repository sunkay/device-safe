// check that the userId specified owns the documents
ownsDocument = function (userId, doc) {
	Logger.debug("Doc userId: "+userId, doc, "ownsDocument");
	if (!(doc && doc.userId === userId))
	{
		throw new Meteor.Error(401, 'Access denied.... you are not the owner to perform this action');
	}
	return true;
}