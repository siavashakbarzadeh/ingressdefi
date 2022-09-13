import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/services/api/data.service';
import { ToasterService } from 'src/app/common/toaster/toaster.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
	blogs: any = {};
	limit = 6;
	skip = 6;
	constructor(private conn: DataService,private toasterService: ToasterService, private router: Router) { }

	ngOnInit(){
		this.getBlogs();
	}

	getBlogs() {
		this.conn.postRequest('blogs', { skip : 0,limit : this.limit}).subscribe((res:any) => {
			if (res.status == true) {
				this.blogs = res.data;
			}
		})
	}

	myFunc(blog_id: any) {
		this.router.navigate(['/blog-details/'], {queryParams:{id: encodeURIComponent(blog_id)}});
	}

	loadmore(skip){
		this.conn.postRequest('blogs',{ skip : this.skip,limit : this.limit }).subscribe((res: any) => {
			this.blogs.push(...res.data);
			this.skip=this.skip+this.limit;
		})
	}

}
