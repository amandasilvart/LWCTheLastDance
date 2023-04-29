public with sharing class classeopp {
    @AuraEnabled(cacheable=true)
    public static list<Opportunity> classeopp() {
        return [Select Id, Name, Amount, StageName 
        From Opportunity 
        Where StageName = 'Negotiation/Review' 
        Order by createdDate Desc 
        Limit 5];
    }
}

 