using { CatalogService } from './cat-service';

annotate CatalogService.Holes with @(UI : {
    SelectionFields : [
        ID,
        score
    ],
    LineItem        : [
        {
            Value : ID,
            Label : '{i18n>Title}'
        },
        {
            Value : score,
            Label : 'Score'
        },
        {Value : par},
        {Value : result}
    ]
}, );
