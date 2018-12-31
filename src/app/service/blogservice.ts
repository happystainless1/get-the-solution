import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { IBlogService } from '../contract/IBlogService';
import { BlogEntry } from 'src/app/model/BlogEntry';

@Injectable()
export class BlogService implements IBlogService {

    private readonly baseUri: string = "assets/database/index.json";

    constructor(protected httpClient: HttpClient) { }

    public GetBlogEntries(getContent: boolean = true): Observable<BlogEntry[]>
    {
        let observable =  this.httpClient.get<BlogEntry[]>(this.baseUri)
        let returnValue = observable;
        
        if(getContent)
        {
            returnValue = observable.pipe(map((blogEntries:BlogEntry[]) => 
            {
                for(let blogEntry of blogEntries)
                {
                    if(!blogEntry.Content)
                    {
                        // async load of blog entry content
                        let contentObservable = this.getBlogEntryContent(blogEntry);
                        if(contentObservable){
                            contentObservable.subscribe((content) => { 
                                blogEntry.Content = content; 
                            });
                        }
                    }
                }
                return blogEntries;
            }));
        }
        
        return returnValue;
    }
    
    public GetBlogEntry(year: number, month: number, day: number, title: string, blogEntries: BlogEntry[], getContent: boolean = true): BlogEntry {
        let blogEntry = blogEntries.find(b => {
            return (b.Title.toLowerCase() == title.toLowerCase()
                //replace all " " with "-"
                || b.Title.replace(/\ /g, "-").toLowerCase() == title.toLowerCase());
        });
        if(!blogEntry.Content && getContent)
        {
            // async load of blog entry content
            this.getBlogEntryContent(blogEntry).subscribe((content) => { blogEntry.Content = content; });
        }
        return blogEntry;
    }
    
    public getBlogEntryContent(blogEntry: BlogEntry) : Observable<string>
    {
        let returnValue:Observable<string> = null;
        if(blogEntry.Source)
        {
            returnValue = this.httpClient.get(blogEntry.Source, {responseType: 'text'});
        }
        return returnValue;
    }
}
